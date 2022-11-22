import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlimentosService {
  private URL:string

  constructor(private http:HttpClient) { 
    this.URL = 'http://localhost:3000/';
  }

  obterDados(nome: string | any): Observable<any> {
    return this.http.get(`${this.URL}alimentos`);
    return this.http.get(`${this.URL}alimentos/nome/${nome}`)
  }
}
