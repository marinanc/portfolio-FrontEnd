import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  //projectURL = 'http://localhost:8080/project/'
  projectURL = 'https://backend-portfolio-3yz3.onrender.com/project/';

  constructor(private httpCliente: HttpClient) { }

  public list(): Observable<Project[]> {
    return this.httpCliente.get<Project[]>(this.projectURL + 'list');
  }

  public detail(id: number): Observable<Project> {
    return this.httpCliente.get<Project>(this.projectURL + `detail/${id}`);
  }

  public save(project: Project): Observable<any> {
    return this.httpCliente.post<any>(this.projectURL + 'create', project);
  }

  public update(id: number, project: Project): Observable<any> {
    return this.httpCliente.put<any>(this.projectURL + `update/${id}`, project);
  }

  public delete(id: number): Observable<any> {
    return this.httpCliente.delete<any>(this.projectURL + `delete/${id}`);
  }
}
