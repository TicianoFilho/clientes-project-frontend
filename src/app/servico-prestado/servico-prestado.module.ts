import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicoPrestadoRoutingModule } from './servico-prestado-routing.module';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';
import { ServicoPrestadoListComponent } from './servico-prestado-list/servico-prestado-list.component';


@NgModule({
  declarations: [
    ServicoPrestadoFormComponent,
    ServicoPrestadoListComponent
  ],
  imports: [
    CommonModule,
    ServicoPrestadoRoutingModule
  ]
})
export class ServicoPrestadoModule { }
