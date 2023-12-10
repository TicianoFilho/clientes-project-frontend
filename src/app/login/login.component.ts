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

  onSubmit() {
    console.log(`Test`);
  }

}
