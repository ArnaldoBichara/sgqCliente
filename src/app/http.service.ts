import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getCadProblemas() {
    return this.http.get ('https://api.openbrewerydb.org/breweries'); // 'https://localhost:5109');
  }
}
