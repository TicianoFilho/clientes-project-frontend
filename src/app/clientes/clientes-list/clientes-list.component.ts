import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Clientes';
import { Observable } from 'rxjs';
import { ClientesService } from 'src/app/clientes/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  clientes: Cliente[] = [];
  selectedCliente: Cliente;
  successMessage: string;
  errorMessage: String;

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

  getClienteAtual(cliente: Cliente) {
    console.log('chamou método getClienteAtual()');
    this.clienteService.clienteAtual = cliente;
  }

  novoCadastro() {
    this.clienteService.novoCadastro = true;
    this.router.navigate(['/clientes/form']);
  }

  deleteCliente(id: number): void {
    console.log(id);
    this.clienteService.delete(id)
      .subscribe(
        response => {this.successMessage = 'Cliente exluído com sucesso.'
        this.ngOnInit()
      }, error => this.errorMessage = 'Erro ao excluir o cliente'
      );
  }

  getSelectedCliente(cliente: Cliente) {
    this.selectedCliente = cliente;
  }
}
