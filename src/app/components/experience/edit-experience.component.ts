import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {

  experience: Experience = null;

  constructor(private experienceService: ExperienceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienceService.detail(id).subscribe( data => {
      this.experience = data;
    }, err => {
      alert("Error al modificar experiencia laboral");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienceService.update(id, this.experience).subscribe( data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar experiencia laboral");
      this.router.navigate(['']);
    })
  }

}
