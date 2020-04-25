import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {UserComponent} from "./user/user.component";
import {CallComponent} from "./call/call.component";
import {PlanComponent} from "./plan/plan.component"; // CLI imports router

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'plan', component: PlanComponent},
  // { path: 'second-component', component: SecondComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
