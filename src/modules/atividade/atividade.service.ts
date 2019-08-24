import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService} from '../shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  private baseUrl = 'http://localhost:5202/api/v1/w/RegAtiv';

  constructor(private http: HttpClient, private httpData: HttpService) { }

  getAtividade(id: string): Observable<any> {
    return this.httpData.get(`${this.baseUrl}/${id}`);
  }

  createAtividade(atividade: object): Observable<object> {
    return this.httpData.post(`${this.baseUrl}`, atividade);
  }

  updateAtividade(id: string, value: any): Observable<object> {
    return this.httpData.put(`${this.baseUrl}/${id}`, value );
  }

  getAtividadesWaiting(): Observable<any> {
    return this.httpData.get (`${this.baseUrl}/waiting`);
  }
  getMinhasAtividades(user: any): Observable<any> {
    return this.httpData.get (`${this.baseUrl}/atribuidas/${user}`);
  }
}
