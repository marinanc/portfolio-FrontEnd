import { Component, OnInit } from '@angular/core';
import { person } from 'src/app/model/person.model';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  p: person = new person("", "", "");

  constructor(public personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getPerson().subscribe(data =>{ this.p = data })
  }

}
