import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  //skillURL = 'http://localhost:8080/skill/'
  skillURL = 'https://backend-portfolio-3yz3.onrender.com/skill/';

  constructor(private httpCliente: HttpClient) { }

  public list(): Observable<Skill[]> {
    return this.httpCliente.get<Skill[]>(this.skillURL + 'list');
  }

  public detail(id: number): Observable<Skill> {
    return this.httpCliente.get<Skill>(this.skillURL + `detail/${id}`);
  }

  public save(skill: Skill): Observable<any> {
    return this.httpCliente.post<any>(this.skillURL + 'create', skill);
  }

  public update(id: number, skill: Skill): Observable<any> {
    return this.httpCliente.put<any>(this.skillURL + `update/${id}`, skill);
  }

  public delete(id: number): Observable<any> {
    return this.httpCliente.delete<any>(this.skillURL + `delete/${id}`);
  }
}
