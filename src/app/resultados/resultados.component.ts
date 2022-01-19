import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Resultados } from '../resultados/resultados';
import {catchError, Observable} from "rxjs";

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})

export class ResultadosComponent implements OnInit {

  resultados: Promise<Resultados[]>;
  url: string;
  private _result: any;
  constructor(httpClient: HttpClient) { 
      //Hardcodeado
      //this.resultados = [new Resultados("mentiroso1",12,"aa"), new Resultados("mentiroso2",10,"ee")];

      //con llamada
      this.url = "https://cursosdedesarrollo.com/pactometro/resultados.json";
      this.resultados = httpClient.get<Observable<Resultados[]>>(this.url)
        .pipe(catchError(this.handleError('get', []))).toPromise();
    }

  private handleError (operation = 'operation', result?: any[]) {
    this._result = result;
    return (error: any): any[] => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return [];
    };
  }

  ngOnInit(): void {
  }

}



  
  