import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {

  title: string = '';
  dateFrom: string = '';
  dateTo: string = '';
  description: string = '';
  img: string = '';

  constructor(private educationService: EducationService, private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const education = new Education(this.title, this.dateFrom, this.dateTo, this.description, this.img);
    education.img = this.imageService.url;
    this.educationService.save(education).subscribe( data => {
      alert("Educacion añadida");
      this.router.navigate(['']);
    }, err => {
      alert("No se pudo añadir la nueva educacion");
      this.router.navigate(['']);
    })
  }

  uploadImage($event: any) {
    const name = "education_" + (document.getElementById('title') as HTMLInputElement).value;
    this.imageService.uploadImage($event, name);
    console.log(this.imageService.url);
  }

  goBack() {
    this.router.navigate(['']);
  }
}
