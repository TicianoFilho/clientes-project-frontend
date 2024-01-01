import { Injectable } from '@angular/core';
import { Cliente } from './Clientes';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  baseUrl = environment.baseApiURL + environment.contextPath + '/api/v1/clientes';
  novoCadastro: boolean = false;

  constructor(private http: HttpClient) { 

  }

  clienteAtual: Cliente;

  salvar( cliente: Cliente) : Observable<Cliente> {
    console.log(cliente);
    return this.http.post<Cliente>(this.baseUrl,cliente);
  }

  editar(cliente: Cliente) : Observable<Cliente> {
    const url = this.baseUrl + `/${cliente.id}`;
    console.log(url);
    return this.http.put<Cliente>(url, cliente);
  }

  getAll(): Observable<Cliente[]> {

    const accessTokenString = localStorage.getItem('access_token');
    const tokenObject = accessTokenString != null ? JSON.parse(accessTokenString) : null;
    const headers = { 'Authorization' : `${tokenObject.token_type} ${tokenObject.access_token}` }

    return this.http.get<Cliente[]>(this.baseUrl, { headers });
  }

  getById(id: number) : Observable<Cliente> {
    return this.http.get<Cliente>(this.baseUrl + `/${id}`);
  }

  delete(id: number) : Observable<any> {
    return this.http.delete<any>(this.baseUrl + `/${id}`);
  }

}
