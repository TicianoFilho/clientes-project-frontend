import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
    this.loginError = false;
    this.cadastrando = false;
  
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

}
