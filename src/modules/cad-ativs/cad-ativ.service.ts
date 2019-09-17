import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService} from '../shared/http.service';
import { ConfigurationService } from '../shared/configuration.service';

@Injectable({
  providedIn: 'root'
})
export class CadAtivService {

  private baseUrl: string;

  constructor( private httpData: HttpService,
               private configurationService: ConfigurationService) {
      this.baseUrl =   'http://' +  window.location.hostname + ':5110/api/v1/Workflow/CadAtiv';
  }


  getCadAtiv(codigo: string): Observable<any> {
    return this.httpData.get(`${this.baseUrl}/${codigo}`);
  }

  createCadAtiv(cad: object): Observable<object> {
    return this.httpData.post(`${this.baseUrl}`, cad);
  }

  updateCadAtiv(codigo: string, value: any): Observable<object> {
    return this.httpData.put(`${this.baseUrl}/${codigo}`, value );
  }

  getCadAtivs(): Observable<any> {
    return this.httpData.get (`${this.baseUrl}`);
  }
}
