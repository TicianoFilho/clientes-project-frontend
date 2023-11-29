import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ServicoPrestado } from './ServicoPrestado';
import { HttpClient, HttpHeaders } from '@angular/common/http'
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

}
