import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PlanComponent} from "./plan.component";

const routes: Routes = [
  {path: 'plan', component: PlanComponent},
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanRoutingModule {
}
