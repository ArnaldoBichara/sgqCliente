import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService} from '../shared/http.service';
import { ConfigurationService } from '../shared/configuration.service';

@Injectable({
  providedIn: 'root'
})
export class CadProblemasService {

  private baseUrl: string;

  constructor(private httpData: HttpService) {
                this.baseUrl =   'http://' +  window.location.hostname + '/api/v1/Problemas/CadProblema';
              }


  getCadProblema(codigo: string): Observable<any> {
    return this.httpData.get(`${this.baseUrl}/${codigo}`);
  }

  createCadProblema(cadProblema: object): Observable<object> {
    return this.httpData.post(`${this.baseUrl}`, cadProblema);
  }

  updateCadProblema(codigo: string, value: any): Observable<object> {
    return this.httpData.put(`${this.baseUrl}/${codigo}`, value );
  }

  getCadProblemas(): Observable<any> {
    return this.httpData.get (`${this.baseUrl}`);
  }
}
