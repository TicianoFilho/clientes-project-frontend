import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  } from './home'

const routes: Routes = [
  { path: 'home', component:  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
