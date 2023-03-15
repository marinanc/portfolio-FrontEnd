import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  experienceURL = 'http://localhost:8080/experience/'

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Experience[]>{
    return this.httpClient.get<Experience[]>(this.experienceURL + 'list');
  }

  public detail(id: number): Observable<Experience>{
    return this.httpClient.get<Experience>(this.experienceURL + `detail/${id}`);
  }

  public save(experience: Experience): Observable<any>{
    return this.httpClient.post<any>(this.experienceURL + 'create', experience);
  }

  public update(id: number, experience: Experience): Observable<any>{
    return this.httpClient.put<any>(this.experienceURL + `update/${id}`, experience);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.experienceURL + `delete/${id}`);
  }
}
