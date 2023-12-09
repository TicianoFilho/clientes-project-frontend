import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';
import { ServicoPrestadoListComponent } from './servico-prestado-research-list/servico-prestado-list.component';

const routes: Routes = [
  {path: 'servicos-prestados-form', component: ServicoPrestadoFormComponent},
  {path: 'servicos-prestados-list', component: ServicoPrestadoListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }
