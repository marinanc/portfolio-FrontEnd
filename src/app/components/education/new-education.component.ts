import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {

  title: string = '';
  description: string = '';

  constructor(private educationService: EducationService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const education = new Education(this.title, this.description);

    this.educationService.save(education).subscribe( data => {
      alert("Educacion añadida");
      this.router.navigate(['']);
    }, err => {
      alert("No se pudo añadir la nueva educacion");
      this.router.navigate(['']);
    })
  }
}
