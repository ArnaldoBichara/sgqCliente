import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService} from '../shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class CadProblemasService {

  constructor(private http: HttpClient, private data: HttpService) { }

  getCadProblemas() {
    return this.data.get ('https://api.openbrewerydb.org/breweries'); // 'https://localhost:5109');
  }
}
