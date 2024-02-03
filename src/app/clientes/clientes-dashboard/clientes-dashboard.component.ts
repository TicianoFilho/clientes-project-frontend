import { Component, OnInit } from '@angular/core';
import { ClienteDashBoard } from '../Clientes';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes-dashboard',
  templateUrl: './clientes-dashboard.component.html',
  styleUrls: ['./clientes-dashboard.component.css']
})
export class ClientesDashboardComponent implements OnInit {

  customerTotal: ClienteDashBoard;

  constructor(private clienteService: ClientesService) {
    this.customerTotal = new ClienteDashBoard();
  }

  ngOnInit(): void {
    this.getDashboard();
  }

  getDashboard() {
    this.clienteService.totalClientes()
    .subscribe(response => this.customerTotal = response,
      errResponse => new ClienteDashBoard());
  }



}
