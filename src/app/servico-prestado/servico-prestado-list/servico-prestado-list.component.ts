import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { PesquisaServicoPrestado } from '../PesquisaServicoPrestado';

@Component({
  selector: 'app-servico-prestado-list',
  templateUrl: './servico-prestado-list.component.html',
  styleUrls: ['./servico-prestado-list.component.css']
})
export class ServicoPrestadoListComponent {

  objetoPesquisa: PesquisaServicoPrestado;
  meses = [
    {"nome": "janeiro", "numero": 1},
      {"nome": "fevereiro", "numero": 2},
      {"nome": "março", "numero": 3},
      {"nome": "abril", "numero": 4},
      {"nome": "maio", "numero": 5},
      {"nome": "junho", "numero": 6},
      {"nome": "julho", "numero": 7},
      {"nome": "agosto", "numero": 8},
      {"nome": "setembro", "numero": 9},
      {"nome": "outubro", "numero": 10},
      {"nome": "novembro", "numero": 11},
      {"nome": "dezembro", "numero": 12},
    ]
  
    constructor() {
      this.objetoPesquisa = new PesquisaServicoPrestado();
    }

    pesquisar() {
      console.log(this.objetoPesquisa);
    }

}
