import {RouterModule, Routes} from "@angular/router";
import {StoreManagementComponent} from "./store-management.component";
import {NgModule} from "@angular/core";
import {DeliverStoreComponent} from "./deliver/deliver-store.component";
import {ProfileStoreComponent} from "./profile/profile-store.component";
import {RentStoreComponent} from "./rent/rent-store.component";

const routes: Routes = [
  {path: 'store', component: StoreManagementComponent},
  {path: 'store/profile', component: ProfileStoreComponent},
  {path: 'store/deliver', component: DeliverStoreComponent},
  {path: 'store/rent', component: RentStoreComponent}
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreManagementRouting {
}
