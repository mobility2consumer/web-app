import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {SoapComponent} from "./soap/soap.component";
import {PlanComponent} from "./plan.component";
import {StatComponent} from "./stat/stat.component";


const routes: Routes = [
  {path: 'plan', component: PlanComponent},
  {path: 'plan/soap', component: SoapComponent},
  {path: 'plan/statistics', component: StatComponent},
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanRoutingModule {
}
