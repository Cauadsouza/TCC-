import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { LA } from 'src/app/Serviços/lista-alimentos';

@Injectable({
  providedIn: 'root'
})
export class AlimentosService {

  url = 'http://localhost:300/alimentos'; 

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getAlimentos(): Observable<LA[]> {
    return this.httpClient.get<LA[]>(this.url)
     .pipe(
      retry(2),
      catchError(this.handleError)
     )
  }
  

  getAlimentoById(id: number): Observable<LA> {
    return this.httpClient.get<LA>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  saveCar(alimento: LA): Observable<LA> {
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

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}