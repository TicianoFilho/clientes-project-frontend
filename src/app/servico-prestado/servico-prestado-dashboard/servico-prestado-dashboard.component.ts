import { Component, OnInit } from '@angular/core';
import { ServicosPrestadosService } from '../servicos-prestados.service';
import { ServicoPrestadoDashboard } from '../ServicoPrestado';

@Component({
  selector: 'app-servico-prestado-dashboard',
  templateUrl: './servico-prestado-dashboard.component.html',
  styleUrls: ['./servico-prestado-dashboard.component.css']
})
export class ServicoPrestadoDashboardComponent implements OnInit {

  dashboardServicoPrestado : ServicoPrestadoDashboard;

  constructor(private servicoPrestadoService: ServicosPrestadosService) {
    this.dashboardServicoPrestado = new ServicoPrestadoDashboard;
  }

  ngOnInit(): void {
    this.getDashboard();
  }

  getDashboard() {
    this.servicoPrestadoService.getDashboard()
    .subscribe(response => this.dashboardServicoPrestado = response,
      error => new ServicoPrestadoDashboard());
  }

}
