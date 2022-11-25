import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { LA } from './lista-alimentos';

@Injectable({
  providedIn: 'root'
})
export class AlimentosService {

  url = 'http://localhost:300/alimentos'; 

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os carros
  getAlimentos(): Observable<LA[]> {
    return this.httpClient.get<LA[]>(this.url)
     .pipe(
      retry(2),
      catchError(this.handleError)
     )
  }
  

  // Obtem um carro pelo id
  getAlimentoById(id: number): Observable<LA> {
    return this.httpClient.get<LA>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // salva um carro
  saveAlimento(alimento: LA): Observable<LA> {
    return this.httpClient.post<LA>(this.url, JSON.stringify(alimento), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateAlimento(alimento: LA): Observable<LA> {
    return this.httpClient.put<LA>(this.url + '/' + alimento.id, JSON.stringify(alimento), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteAlimento(alimento: LA) {
    return this.httpClient.delete<LA>(this.url + '/' + alimento.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Servidor não esta funcionando';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}