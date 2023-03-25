import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { person } from 'src/app/model/person.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {

  person: person = null;

  constructor(private personService: PersonService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router, 
    public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personService.detail(id).subscribe( data => {
      this.person = data
    }, err => {
      alert("Error al editar perfil");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.person.img = this.imageService.url;
    this.personService.update(id, this.person).subscribe( data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar perfil");
      this.router.navigate(['']);
    })
  }

  uploadImage($event: any) {
    const id = this.activatedRoute.snapshot.params['id'];
    const name = "profile_" + id;
    this.imageService.uploadImage($event, name)
  }

  goBack() {
    this.router.navigate(['']);
  }

}
