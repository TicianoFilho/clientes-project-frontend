import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Clientes';
import { ClientesService } from '../../clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  saveSuccess: boolean = false;
  erros: string[] | null;

  constructor(private clienteService: ClientesService, private router: Router) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    
  }

  clicar() {
    console.log(this.cliente);
  }

  onSubmit() {
   this.clienteService.salvar(this.cliente)
    .subscribe( response => { 
      this.saveSuccess = true;
      this.erros = null;
      this.cliente = response;
    }, errorResponse => {
      this.erros = errorResponse.error.erros;
      this.saveSuccess = false;
    });
  }

  irParaListaClientes() {
    this.router.navigate(['/clientes-list']);
  }

}
