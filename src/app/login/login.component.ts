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
  loginError: boolean;
  cadastroSucesso: string | null;
  cadastrando: boolean;

  constructor(private router: Router, private authService: AuthService) {
    this.loginError = false;
    this.cadastrando = false;
    this.usuario = new Usuario();
  }

  onSubmit() {
    this.router.navigate(["/home"]);
  }

  preparaCadastro(event: Event) {
    event.preventDefault()
    this.cadastrando = true;
  }

  cancelaCadastro() {
    this.cadastrando = false;
  }

  salvar() {
    this.authService
    .salvarUsuario(this.usuario)
    .subscribe(
      response => {
        this.usuario = response;
        this.cadastroSucesso = 'Cadastro realizado com sucesso! Efetue o login.';
        this.loginError = false;
      }, error => {
        this.loginError = true;
        this.cadastroSucesso = null;
      });
  }

}
