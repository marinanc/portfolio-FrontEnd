import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  educationURL = 'http://localhost:8080/education/'

  constructor(private httpCliente: HttpClient) { }

  public list(): Observable<Education[]> {
    return this.httpCliente.get<Education[]>(this.educationURL + 'list');
  }

  public detail(id: number): Observable<Education> {
    return this.httpCliente.get<Education>(this.educationURL + `detail/${id}`);
  }

  public save(education: Education): Observable<any> {
    return this.httpCliente.post<any>(this.educationURL + 'create', education);
  }

  public update(id: number, education: Education): Observable<any> {
    return this.httpCliente.put<any>(this.httpCliente + `update/${id}`, education);
  }

  public delete(id: number): Observable<any> {
    return this.httpCliente.delete<any>(this.educationURL + `delete/${id}`);
  }
}
