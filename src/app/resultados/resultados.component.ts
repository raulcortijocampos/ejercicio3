import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Resultados } from '../resultados/resultados';
import {catchError, Observable} from "rxjs";
import { ResultadosServiceService } from './resultados-service.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})

export class ResultadosComponent implements OnInit {

  resultados: Promise<Resultados[]>;
  
  constructor(serviceInst: ResultadosServiceService) { 
      this.resultados = serviceInst.getObservablePartidos().toPromise();
    }

  

  ngOnInit(): void {
  }

}



  
  