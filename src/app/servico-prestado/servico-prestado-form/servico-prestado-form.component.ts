import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes/clientes.service';
import { Cliente } from 'src/app/clientes/Clientes';
import { ServicoPrestado } from '../ServicoPrestado';
import { ServicosPrestadosService } from '../servicos-prestados.service';
import { Observable } from 'rxjs';
import { error } from 'jquery';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[];
  servicoPrestado: ServicoPrestado;
  saveSuccess: boolean = false;
  errors: string[] | null;

  constructor(
    private clienteService: ClientesService,
    private servicoPrestadoService: ServicosPrestadosService) {
      this.servicoPrestado = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.LoadClientes();
  }

  onSubmit() {
   this.salvar();
  }


  salvar() {
    this.servicoPrestadoService
      .salvar(this.servicoPrestado)
      .subscribe(response => {
        this.saveSuccess = true;
        this.errors = null;
      },  errorResponse => {
        this.errors = errorResponse.error.erros;
        this.saveSuccess = false;
      });
    }

  LoadClientes() {
    this.clienteService.getAll().subscribe(response => this.clientes = response);
  }

}
