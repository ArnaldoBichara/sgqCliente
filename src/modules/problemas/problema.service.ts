import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService} from '../shared/http.service';
import { ConfigurationService } from '../shared/configuration.service';

@Injectable({
  providedIn: 'root'
})
export class ProblemaService {

  private baseUrl: string;

  constructor(private httpData: HttpService,
              private configurationService: ConfigurationService) {
                this.baseUrl =   'http://' +  window.location.hostname + ':5202/api/v1/p/RegProblema';
              }


  getProblema(id: string): Observable<any> {
    return this.httpData.get(`${this.baseUrl}/${id}`);
  }

  createProblema(problema: object): Observable<object> {
    return this.httpData.post(`${this.baseUrl}`, problema);
  }

  updateProblema(id: string, value: any): Observable<object> {
    return this.httpData.put(`${this.baseUrl}/${id}`, value );
  }

  getProblemasAbertos(): Observable<any> {
    return this.httpData.get (`${this.baseUrl}/abertos`);
  }
}
