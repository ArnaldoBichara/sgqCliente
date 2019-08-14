import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService} from '../shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class CadProblemasService {

  private baseUrl = 'http://localhost:5109/api/v1/CadProblema';

  constructor(private http: HttpClient, private httpData: HttpService) { }


  getCadProblema(Codigo: string): Observable<any> {
    return this.httpData.get(`${this.baseUrl}/${Codigo}`);
  }

  createCadProblema(cadProblema: Object): Observable<Object> {
    return this.httpData.post(`${this.baseUrl}`, cadProblema);
  }

  updateCadProblema(Codigo: string, value: any): Observable<Object> {
    return this.httpData.put(`${this.baseUrl}/${Codigo}`, value );
  }

  getCadProblemas(): Observable<any> {
    return this.httpData.get (`${this.baseUrl}`); // 'https://localhost:5109');
  }
}
