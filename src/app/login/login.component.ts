import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './Usuario';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: Usuario;
  readonly invalidLogin = 'Login ou senha inválidos';
  cadastroSucesso: string | null;
  cadastrando: boolean;
  errors: string[];

  constructor(private router: Router, private oauthService: AuthService) {
    this.cadastrando = false;
    this.usuario = new Usuario();
  }

  onSubmit() {
    this.logar();
  }

  logar() {
    this.oauthService.doLogin(this.usuario.username, this.usuario.password)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(["/home"]);
      }, err => { 
        this.errors = ['Não deu certo o Login!'];
      });
  }

  preparaCadastro(event: Event) {
    event.preventDefault()
    this.cadastrando = true;
  }

  cancelaCadastro() {
    this.cadastrando = false;
    this.usuario.username = "";
    this.usuario.password= "";
    this.errors = [];
  }

  salvar() {
    this.oauthService
    .salvarUsuario(this.usuario)
    .subscribe(
      response => {
        this.usuario = response;
        this.cadastroSucesso = 'Cadastro realizado com sucesso! Efetue o login.';
      }, errorResponse => {      
        this.cadastroSucesso = null;
        this.errors = errorResponse.error.erros;
      });
  }

}
