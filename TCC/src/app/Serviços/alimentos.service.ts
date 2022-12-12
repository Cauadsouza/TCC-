import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { LA } from './lista-alimentos';

@Injectable({
  providedIn: 'root'
})
export class AlimentosService {

  urlB = 'http://localhost:300/bebidas'; 
  urlC = 'http://localhost:300/carnes';
  urlD = 'http://localhost:300/variados';
  urlF = 'http://localhost:300/frutas';
  urlV = 'http://localhost:300/vegetais';
  urlAF ='http://localhost:300/alimentosIF'

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getBebidas(): Observable<LA[]> {
    return this.httpClient.get<LA[]>(this.urlB)
     .pipe(
      retry(2),
      catchError(this.handleError)
     )
  }
  

  getBebidasById(id: number): Observable<LA> {
    return this.httpClient.get<LA>(this.urlB + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getCarnes(): Observable<LA[]> {
    return this.httpClient.get<LA[]>(this.urlC)
     .pipe(
      retry(2),
      catchError(this.handleError)
     )
  }
  

  getCarnesById(id: number): Observable<LA> {
    return this.httpClient.get<LA>(this.urlC + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getVariados(): Observable<LA[]> {
    return this.httpClient.get<LA[]>(this.urlD)
     .pipe(
      retry(2),
      catchError(this.handleError)
     )
  }
  

  getVariadosById(id: number): Observable<LA> {
    return this.httpClient.get<LA>(this.urlD + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getFrutas(): Observable<LA[]> {
    return this.httpClient.get<LA[]>(this.urlF)
     .pipe(
      retry(2),
      catchError(this.handleError)
     )
  }
  

  getFrutasById(id: number): Observable<LA> {
    return this.httpClient.get<LA>(this.urlF + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getVegetais(): Observable<LA[]> {
    return this.httpClient.get<LA[]>(this.urlV)
     .pipe(
      retry(2),
      catchError(this.handleError)
     )
  }
  

  getVegetaisById(id: number): Observable<LA> {
    return this.httpClient.get<LA>(this.urlV + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getAlimentosIF(): Observable<LA[]> {
    return this.httpClient.get<LA[]>(this.urlAF)
     .pipe(
      retry(2),
      catchError(this.handleError)
     )
  }
  

  getAlimentosIFById(id: number): Observable<LA> {
    return this.httpClient.get<LA>(this.urlAF + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


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