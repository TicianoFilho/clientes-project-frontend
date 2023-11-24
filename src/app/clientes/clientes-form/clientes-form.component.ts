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
  saveSuccess: boolean = false;
  erros: string[];

  constructor(private clienteService: ClientesService) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    
  }

  clicar() {
    console.log(this.cliente);
  }

  onSubmit() {
   this.clienteService.salvar(this.cliente)
    .subscribe( response => { this.saveSuccess = true
    }, errorResponse => {
      this.erros = errorResponse.error.erros;
    });
  }

}
