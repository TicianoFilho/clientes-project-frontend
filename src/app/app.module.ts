import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { ClientesModule } from './clientes/clientes.module';
import { ClientesService } from './clientes/clientes.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { ServicoPrestadoModule } from './servico-prestado/servico-prestado.module';
import { ServicosPrestadosService } from './servico-prestado/servicos-prestados.service';
import { ServicoPrestadoResearch } from './servico-prestado/ServicoPrestado';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { AuthService } from './auth.service';
import { TokenInterceptor } from './token.interceptor';
import { ClienteDashBoard } from './clientes/Clientes';
import { ClientesDashboardComponent } from './clientes/clientes-dashboard/clientes-dashboard.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    ServicoPrestadoModule,
    FormsModule,
  ],
  providers: [
    ClientesService,
    ServicosPrestadosService,
    ServicoPrestadoResearch,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
