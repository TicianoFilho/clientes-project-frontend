import { Injectable } from '@angular/core';
import { Cliente } from './clientes/Clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  getCliente(): Cliente {
    let cliente: Cliente = new Cliente();
    cliente.nome = 'Ticiano filho';
    cliente.cpf = '0668.256.354-41';
    return cliente;
  }
}
