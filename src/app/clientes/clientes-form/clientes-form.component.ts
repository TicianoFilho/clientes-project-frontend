import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Clientes';
import { ClientesService } from '../../clientes.service';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;

  constructor(private clienteService: ClientesService) {
    this.cliente = clienteService.getCliente();
  }

  ngOnInit(): void {
    
  }

  clicar() {
    console.log(this.cliente);
  }

  onSubmit() {
    console.log(this.cliente);
  }

}
