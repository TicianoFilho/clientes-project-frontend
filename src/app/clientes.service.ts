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

  editar(cliente: Cliente) : Observable<Cliente> {
    const url = `http://127.0.0.1:8080/sistema-vendas/api/v1/clientes/${cliente.id}`;
    return this.http.put<Cliente>(url, cliente);
  }

  getAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://127.0.0.1:8080/sistema-vendas/api/v1/clientes');
  }

  getById(id: number) : Observable<Cliente> {
    return this.http.get<Cliente>(`http://127.0.0.1:8080/sistema-vendas/api/v1/clientes/${id}`);
  }

  delete(id: number) : Observable<any> {
    return this.http.delete<any>(`http://127.0.0.1:8080/sistema-vendas/api/v1/clientes/${id}`);
  }

}
