import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;
  readonly invalidLogin = 'Login ou senha inválidos';
  loginError: boolean;
  cadastrando: boolean;

  constructor() {
    this.loginError = false;
    this.cadastrando = false;
  }

  onSubmit() {
    console.log(`login: ${this.username} e senha ${this.password}`);
  }

  preparaCadastro(event: Event) {
    event.preventDefault()
    this.cadastrando = true;
  }

  cancelaCadastro() {
    this.cadastrando = false;
  }

}
