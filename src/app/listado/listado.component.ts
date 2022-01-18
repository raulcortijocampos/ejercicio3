import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  constructor() {
    
   }

  listadoFrutas : any[] | undefined;

  frutaAdd: string | undefined;
  //miFruta: string | undefined;
  //fruta: String | "";
  ngOnInit(): void {
    //this.fruta = "";
    this.listadoFrutas =  [
      "manzana", "pera"
    ];
    //this.frutaAdd = "";
    
  }

  addFruta(){
    let miFruta = this.frutaAdd;
    this.listadoFrutas?.push(miFruta);
    this.frutaAdd = "";
  }

}
