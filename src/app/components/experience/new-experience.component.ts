import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit {

  name: string = '';
  description: string = '';

  constructor(private experienceService: ExperienceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const experience = new Experience(this.name, this.description);
    this.experienceService.save(experience).subscribe(data => {
      alert("Experiencia laboral añadida");
      this.router.navigate(['']);
    }, err => {
      alert("No se pudo añadir la nueva experiencia laboral");
      this.router.navigate(['']);
    })
  }

}
