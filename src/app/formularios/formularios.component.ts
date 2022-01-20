import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
  
  generos:string[];
  orientaciones:string[];
  tiposRelaciones:string[];
  constructor() { 
    this.generos=["hombre","mujer","otro"];
    this.tiposRelaciones=["amigos","novios","otro"];
    this.orientaciones=["heterosexual","homosexual","bisexual"];
  }

  ngOnInit(): void {
  }

}
