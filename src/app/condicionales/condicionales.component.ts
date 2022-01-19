import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condicionales',
  templateUrl: './condicionales.component.html',
  styleUrls: ['./condicionales.component.css']
})
export class CondicionalesComponent implements OnInit {

  visible: boolean;
  literalMostrar: boolean;
  constructor() {
    this.visible=true;
    this.literalMostrar=false;
   }

  ngOnInit(): void {
  }

  cambiarValor(){
    if(this.visible){
      this.visible = false;
      this.literalMostrar = true;
    }else{
      this.visible=true;
      this.literalMostrar = false;
    }
  }
}
