import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  name: string = '';
  description: string = '';
  link: string = '';

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const project = new Project(this.name, this.description, this.link);
    this.projectService.save(project).subscribe( data => {
      alert("Proyecto añadido");
      this.router.navigate(['']);
    }, err => {
      alert("No se pudo añadir el nuevo proyecto");
      this.router.navigate(['']);
    })
  }

  goBack() {
    this.router.navigate(['']);
  }
}
