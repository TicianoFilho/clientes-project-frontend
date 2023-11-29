import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { ClientesModule } from './clientes/clientes.module';
import { ClientesService } from './clientes/clientes.service';
import { HttpClientModule } from '@angular/common/http'
import { ServicoPrestadoModule } from './servico-prestado/servico-prestado.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    ServicoPrestadoModule,
  ],
  providers: [
    ClientesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
