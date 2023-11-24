import { Injectable } from '@angular/core';
import { Cliente } from './clientes/Clientes';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { 

  }

  salvar( cliente: Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>("http://127.0.0.1:8080/sistema-vendas/api/v1/clientes",cliente);
  }

  getCliente(): Cliente {
    let cliente: Cliente = new Cliente();
    cliente.nome = 'Ticiano filho';
    cliente.cpf = '0668.256.354-41';
    return cliente;
  }
}
