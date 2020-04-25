import {RouterModule, Routes} from "@angular/router";
import {CallComponent} from "./call.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: 'call', component: CallComponent},
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallRoutingModule {
}
