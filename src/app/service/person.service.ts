import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { person } from '../model/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  URL = environment.URL + 'persons/';

  constructor(private http: HttpClient) { }

  public getPerson(): Observable<person>{
    return this.http.get<person>(this.URL + 'get/profile');
  }
}
