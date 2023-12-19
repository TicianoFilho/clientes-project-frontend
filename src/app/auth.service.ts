import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './login/Usuario';
import { Observable, config } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.baseApiURL + environment.contextPath + '/api/v1/usuarios';

  constructor(private http: HttpClient) { 

  }

  salvarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl, usuario);

  }
}
