import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StoresComponent} from "./stores/stores.component";
import {UserComponent} from "./user.component";
import {TransportComponent} from "./transport/transport.component";
import {OrdersComponent} from "./orders/orders.component";
import {TransportToMeComponent} from "./transport-to-me/transport-to-me.component";
import {RentComponent} from "./rent/rent.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'user/store', component: StoresComponent},
  {path: 'user/request-transport', component: TransportComponent},
  {path: 'user/request-transport-to-me', component: TransportToMeComponent},
  {path: 'user/rent', component: RentComponent},
  {path: 'user/orders', component: OrdersComponent},
  {path: 'user/stat', component: ProfileComponent},
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
