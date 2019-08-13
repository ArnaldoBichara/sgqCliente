import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService} from '../shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class CadProblemasService {

  private baseUrl = 'http://localhost:5109/api/v1/CadProblema';

  constructor(private http: HttpClient, private data: HttpService) { }

  getCadProblemas(): Observable<any> {
    return this.data.get (`${this.baseUrl}`); // 'https://localhost:5109');
  }
}
