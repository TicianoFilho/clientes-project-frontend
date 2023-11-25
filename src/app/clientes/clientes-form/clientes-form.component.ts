import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Clientes';
import { ClientesService } from '../../clientes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  saveSuccess: boolean = false;
  erros: string[] | null;
  id: number;

  constructor(
      private clienteService: ClientesService, 
      private router: Router,
      private activatedRoute: ActivatedRoute) {

    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    this.getClienteById();
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

  getClienteById() {
   
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      
      if (this.id) {
        this.clienteService.getById(this.id)
          .subscribe(clienteResponse => this.cliente = clienteResponse, 
            errorReponse => this.cliente = new Cliente());
      }
    }); 
  }
}
