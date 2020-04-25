import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StoresComponent} from "./stores/stores.component";
import {UserComponent} from "./user.component";

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'user/store', component: StoresComponent},
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
