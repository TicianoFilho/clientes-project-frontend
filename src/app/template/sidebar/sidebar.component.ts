import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  userName: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.userName = this.authService.obterNomeUsuarioLogado();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }


}
