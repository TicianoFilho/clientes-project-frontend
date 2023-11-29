import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes/clientes.service';
import { Cliente } from 'src/app/clientes/Clientes';
import { ServicoPrestado } from '../ServicoPrestado';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[];
  servicoPrestado: ServicoPrestado;

  constructor(private clienteService: ClientesService) {
    this.clienteService = clienteService;
    this.servicoPrestado = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.LoadClientes();
  }

  onSubmit() {
    console.log(this.servicoPrestado);
  }

  LoadClientes() {
    this.clienteService.getAll().subscribe(response => this.clientes = response);
  }

}
