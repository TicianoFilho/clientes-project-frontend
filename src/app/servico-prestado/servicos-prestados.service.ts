import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ServicoPrestado, ServicoPrestadoDashboard, ServicoPrestadoResearch } from './ServicoPrestado';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicosPrestadosService {

  baseURL = environment.baseApiURL + environment.contextPath + '/api/v1/servicos-prestados';

  constructor(private http: HttpClient) {

  }

  salvar( servicoPrestado: ServicoPrestado) : Observable<ServicoPrestado> {
    return this.http.post<ServicoPrestado>(this.baseURL,servicoPrestado);
  }

  pesquisar(theNomeCliente: string, theNumeroMes: number) : Observable<ServicoPrestadoResearch[]> {
    const nomeCliente = theNomeCliente ? theNomeCliente : "";
    const numeroMes = theNumeroMes ? theNumeroMes : 0;

    const params = new HttpParams().set("nomeCliente", nomeCliente).set("numeroMes", numeroMes);
    const url = this.baseURL + '?' + params;

    return this.http.get<ServicoPrestadoResearch[]>(url);
  }

  getDashboard() : Observable<ServicoPrestadoDashboard> {
    return this.http.get<ServicoPrestadoDashboard>(`${this.baseURL}/dashboard`);
  }

}
