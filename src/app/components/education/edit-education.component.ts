import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {

  education: Education = null;

  constructor(private educationService: EducationService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educationService.detail(id).subscribe( data => {
      this.education = data;
    }, err => {
      alert("Error al modificar educación");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.education.img = this.imageService.url;
    this.educationService.update(id, this.education).subscribe( data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar educacion");
      this.router.navigate(['']);
    })
  }

  uploadImage($event: any) {
    const name = "education_" + (document.getElementById('title') as HTMLInputElement).value;
    this.imageService.uploadImage($event, name);
    console.log(this.imageService.url);
  }
}
