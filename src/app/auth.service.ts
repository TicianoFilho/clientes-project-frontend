import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './login/Usuario';
import { Observable, config } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.baseApiURL + environment.contextPath + '/api/v1/usuarios';
  getTokenURL = environment.baseApiURL + environment.contextPath + environment.getTokenURI;
  clientName = environment.clientName;
  clientSecret = environment.clientSecret;
  jwtHelper: JwtHelperService = new JwtHelperService();
  
  constructor(private http: HttpClient) { 

  }

  salvarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl, usuario);

  }

  doLogin(username: string, password: string) : Observable<any>{
    const params = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');
    
    const headers = {
      'Authorization': 'Basic ' + btoa(`${this.clientName}:${this.clientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded',
    }
      console.log('username: ' + username + ", password: " + password)
      console.log(params);
      console.log(headers);
    return this.http.post<any>(this.getTokenURL, params.toString(), { headers })
  }

  isAuthenticated(): boolean {
    const token = this.obterToken();
    if (token) {
      const isExpired = this.jwtHelper.isTokenExpired(token);
      return !isExpired;
    }
    return false;
  }

  obterToken(): string | null {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      const token = JSON.parse(accessToken).access_token;
      return token;
    }
    return null;
  }

}
