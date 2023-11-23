import { Component } from '@angular/core';
import { Cliente } from '../Clientes'

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent {

  cliente: Cliente;

  constructor() {
    this.cliente = new Cliente();
  }

  clicar() {
    console.log(this.cliente);
  }

}
