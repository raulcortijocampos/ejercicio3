import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventillos',
  templateUrl: './eventillos.component.html',
  styleUrls: ['./eventillos.component.css']
})
export class EventillosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickBueno(){
    console.log("buenos diah!")
  }
  clickFeo(){
    console.log("tu que miras payaso")
  }
  clickMalo(){
    console.log("jiji")
  }
  enviarFormulario(cadena:string){
    console.log("el valor es", cadena);
  }
  menosCinco(cadena:string){
    
  }
}
