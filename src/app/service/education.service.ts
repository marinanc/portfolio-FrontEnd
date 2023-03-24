import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  URL = environment.URL + '/education/';

  constructor(private httpCliente: HttpClient) { }

  public list(): Observable<Education[]> {
    return this.httpCliente.get<Education[]>(this.URL + 'list');
  }

  public detail(id: number): Observable<Education> {
    return this.httpCliente.get<Education>(this.URL + `detail/${id}`);
  }

  public save(education: Education): Observable<any> {
    return this.httpCliente.post<any>(this.URL + 'create', education);
  }

  public update(id: number, education: Education): Observable<any> {
    return this.httpCliente.put<any>(this.URL + `update/${id}`, education);
  }

  public delete(id: number): Observable<any> {
    return this.httpCliente.delete<any>(this.URL + `delete/${id}`);
  }
}
