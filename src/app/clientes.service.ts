import { Injectable } from '@angular/core';
import { Cliente } from './clientes/Clientes';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { 

  }

  salvar( cliente: Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>("http://127.0.0.1:8080/sistema-vendas/api/v1/clientes",cliente);
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://127.0.0.1:8080/sistema-vendas/api/v1/clientes');
  }

}
