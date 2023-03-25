import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit {

  name: string = '';
  dateFrom: string = '';
  dateTo: string = '';
  description: string = '';
  img: string = '';

  constructor(private experienceService: ExperienceService, private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const experience = new Experience(this.name, this.dateFrom, this.dateTo, this.description, this.img);
    experience.img = this.imageService.url;
    this.experienceService.save(experience).subscribe(data => {
      alert("Experiencia laboral añadida");
      this.router.navigate(['']);
    }, err => {
      alert("No se pudo añadir la nueva experiencia laboral");
      this.router.navigate(['']);
    })
  }

  uploadImage($event: any) {
    const name = "job_" + (document.getElementById('name') as HTMLInputElement).value;
    this.imageService.uploadImage($event, name);
    console.log(this.imageService.url);
  }

  goBack() {
    this.router.navigate(['']);
  }

}
