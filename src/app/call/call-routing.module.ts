import {RouterModule, Routes} from "@angular/router";
import {CallComponent} from "./call.component";
import {NgModule} from "@angular/core";
import {RentCallComponent} from "./rent/rent-call.component";
import {TransportCallComponent} from "./transport/transport-call.component";
import {StoresCallComponent} from "./stores/stores-call.component";
import {DeliverCallComponent} from "./deliver/deliver-call.component";

const routes: Routes = [
  {path: 'call', component: CallComponent},
  {path: 'call/transport', component: TransportCallComponent},
  {path: 'call/rent', component: RentCallComponent},
  {path: 'call/deliver', component: DeliverCallComponent},
  {path: 'call/store', component: StoresCallComponent},
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallRoutingModule {
}
