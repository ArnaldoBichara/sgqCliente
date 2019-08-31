import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService} from '../shared/http.service';
import { ConfigurationService } from '../shared/configuration.service';


@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  private baseUrl: string;

  constructor(private httpData: HttpService,
              private configurationService: ConfigurationService) {
      this.baseUrl = this.configurationService.serverSettings.apiGwUrl + ':5202/api/v1/w/RegAtiv';
    }

  getAtividade(id: string): Observable<any> {
    return this.httpData.get(`${this.baseUrl}/${id}`);
  }

  createAtividade(atividade: object): Observable<object> {
    return this.httpData.post(`${this.baseUrl}`, atividade);
  }

  updateAtividade(atividade: object): Observable<object> {
    return this.httpData.put(`${this.baseUrl}`, atividade );
  }

  getAtividadesWaiting(): Observable<any> {
    return this.httpData.get (`${this.baseUrl}/waiting`);
  }
  getAtividadesExec(): Observable<any> {
    return this.httpData.get (`${this.baseUrl}/executadas`);
  }
  getMinhasAtividades(user: any): Observable<any> {
    return this.httpData.get (`${this.baseUrl}/atrib/${user}`);
  }
}
