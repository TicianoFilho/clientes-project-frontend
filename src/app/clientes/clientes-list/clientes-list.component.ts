import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Clientes';
import { Observable } from 'rxjs';
import { ClientesService } from 'src/app/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  clientes: Cliente[] = [];
  selectedCliente: Cliente;

  constructor(private clienteService: ClientesService, private router: Router) {
  }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(): void {
    this.clienteService.getAll()
      .subscribe( (data: Cliente[]) => {
        this.clientes = data;
      }, 
      (error) => {
        console.error('Ocorreu um erro:', error);
      }
    );
  }

  novoCadastro() {
    this.router.navigate(['/clientes-form']);
  }

  deleteCliente(id: number): void {
    this.clienteService.delete(id);
  }

  getSelectedCliente(cliente: Cliente) {
    this.selectedCliente = cliente;
  }
}
