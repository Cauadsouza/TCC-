import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlimentosService {
  private URL:string

  constructor(private http:HttpClient) { 
    this.URL = 'http://localhost:300/';
  }

  obterDados(): Observable<any> {
    return this.http.get(`${this.URL}Alimentos`);
  }
}
