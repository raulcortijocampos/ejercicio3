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

  resultadosPromise: Promise<Resultados[]>;
  resultadosObservable: Observable<Resultados[]>
  resultados: Resultados[];
  constructor(serviceInst: ResultadosServiceService) {
    //una promesa la cual podemos pintar sin mas 
    this.resultadosPromise = serviceInst.getObservablePartidos().toPromise();
    //el observable para usarlo despues
    this.resultadosObservable = serviceInst.getObservablePartidos();
    // variable de vista "vacía"
    this.resultados = [];
    }

  

  ngOnInit(): void {
    this.resultadosObservable.subscribe((data) => {
      data.forEach( (value : Resultados) => {
        //let partido: Partido = new Partido(value.nombre, value.dipu, value.imagen);
        this.resultados.push(value);
      });

    });
  }

}



  
  