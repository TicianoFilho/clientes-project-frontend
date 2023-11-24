import { Component } from '@angular/core';
import { Cliente } from '../Clientes';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent {

  clientes: Cliente[];

  constructor(private Client)

  getClientes: Cliente[] {
    return null; // TODO implement from here.
  }
}
