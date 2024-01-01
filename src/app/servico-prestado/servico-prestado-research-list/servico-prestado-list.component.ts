import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { PesquisaServicoPrestado } from '../PesquisaServicoPrestado';
import { ServicosPrestadosService } from '../servicos-prestados.service';
import { ServicoPrestadoResearch } from '../ServicoPrestado';

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
    ];

    erros: string[] | null;
    servicoPrestadoResearch: ServicoPrestadoResearch[];
    noDataFoundMessage: string | null = '';
  
    constructor(private servicoPrestadoService: ServicosPrestadosService) {
      this.objetoPesquisa = new PesquisaServicoPrestado();
    }

    onSubmit() {
      this.pesquisar();
    }

    pesquisar() {
      this.servicoPrestadoService.pesquisar(this.objetoPesquisa.nomeCliente, this.objetoPesquisa.numeroMes)
       .subscribe(response => {
        this.servicoPrestadoResearch = response;
        this.noDataFoundMessage = this.returnedDataExists(this.servicoPrestadoResearch);
      }, err => ['Erro na busca.']);
    }

    private returnedDataExists(data: ServicoPrestadoResearch[]) : string | null{
      return (data.length <= 0) ? 'Nenhum registro encontrado!' : null;
    }

}
