import {RouterModule, Routes} from "@angular/router";
import {StoreManagementComponent} from "./store-management.component";
import {NgModule} from "@angular/core";
import {DeliverStoreComponent} from "./deliver/deliver-store.component";
import {ProfileStoreComponent} from "./profile/profile-store.component";
import {RentStoreComponent} from "./rent/rent-store.component";
import {OrdersStoreComponent} from "./orders/orders-store.component";

const routes: Routes = [
  {path: 'store', component: StoreManagementComponent},
  {path: 'store/stat', component: ProfileStoreComponent},
  {path: 'store/soap', component: DeliverStoreComponent},
  {path: 'store/orders', component: OrdersStoreComponent},
  {path: 'store/rent', component: RentStoreComponent}
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreManagementRouting {
}
