



import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component"; // CLI imports router

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'second-component', component: SecondComponent },
];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
