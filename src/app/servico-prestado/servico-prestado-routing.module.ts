import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';
import { ServicoPrestadoListComponent } from './servico-prestado-research-list/servico-prestado-list.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {path: 'servicos-prestados', component: LayoutComponent, canActivate: [AuthGuard], children: [
    {path: 'form', component: ServicoPrestadoFormComponent},
    {path: 'list', component: ServicoPrestadoListComponent},
    {path: '', redirectTo: '/servicos-prestados/list',pathMatch: 'full'}, 
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }
