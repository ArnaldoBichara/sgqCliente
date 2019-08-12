import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService} from '../shared/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class ProblemasService {

  constructor(private http: HttpClient, private data: DataService) { }

  getCadProblemas() {
    return this.data.get ('https://api.openbrewerydb.org/breweries'); // 'https://localhost:5109');
  }
}
