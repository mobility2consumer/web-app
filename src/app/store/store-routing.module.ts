import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {StoreManagementComponent} from "./store-management.component";

const routes: Routes = [
  {path: 'store', component: StoreManagementComponent},
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule {
}
