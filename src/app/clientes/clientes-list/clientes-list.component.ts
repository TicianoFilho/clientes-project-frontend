import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Clientes';
import { Observable } from 'rxjs';
import { ClientesService } from 'src/app/clientes.service';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clienteService: ClientesService) {
  }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(): void {
    this.clienteService.getClientes()
      .subscribe( (data: Cliente[]) => {
        this.clientes = data;
      }, 
      (error) => {
        console.error('Ocorreu um erro:', error);
      }
    );
  }

}
