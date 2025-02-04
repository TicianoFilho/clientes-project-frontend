import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';
import { ClientesDashboardComponent } from '../clientes/clientes-dashboard/clientes-dashboard.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    ClientesDashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent
  ]
})
export class TemplateModule { }
