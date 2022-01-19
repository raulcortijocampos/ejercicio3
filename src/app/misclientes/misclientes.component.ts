import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente';

@Component({
  selector: 'app-misclientes',
  templateUrl: './misclientes.component.html',
  styleUrls: ['./misclientes.component.css']
})


export class MisclientesComponent implements OnInit {

  listaClientes: Cliente[];
  clienteAdd: Cliente;

  constructor() { 
    this.clienteAdd = new Cliente("", "");
    this.listaClientes = [
      new Cliente("juan","madrid"),
      new Cliente("maria","segovia")
    ]
  }

  ngOnInit(): void {
  }

  addCliente(){
    //let nuevoCliente = new Cliente(this.clienteAdd.nombre, this.clienteAdd.direccion);
    let nuevoCliente = this.clienteAdd;
    this.listaClientes.push(nuevoCliente);
    this.clienteAdd = new Cliente();
  }


}
