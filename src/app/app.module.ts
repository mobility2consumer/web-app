import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {NavbarComponent} from './navbar/navbar.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from "@angular/material/card";
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from './home/home.component';
import {HeaderImageComponent} from './home/header-image/header-image.component';
import {ButtonChoiceComponent} from './home/button-choice/button-choice.component';
import {UserComponent} from './user/user.component';
import {CallComponent} from './call/call.component';
import {PlanComponent} from './plan/plan.component';
import {StoresComponent} from './user/stores/stores.component';
import {UserRoutingModule} from "./user/user-routing.module";
import {MatTooltipModule} from "@angular/material/tooltip";
import {TransportComponent} from './user/transport/transport.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { OrdersComponent } from './user/orders/orders.component';
import {TransportToMeComponent} from "./user/transport-to-me/transport-to-me.component";
import {RentComponent} from "./user/rent/rent.component";
import {MatRadioModule} from "@angular/material/radio";
import { ProfileComponent } from './user/profile/profile.component';
import {PlanRoutingModule} from "./plan/plan-routing.module";
import {CallRoutingModule} from "./call/call-routing.module";
import {StoreRoutingModule} from "./store/store-routing.module";
import {StoreManagementComponent} from "./store/store-management.component";
import {TransportCallComponent} from "./call/transport/transport-call.component";
import {StoresCallComponent} from "./call/stores/stores-call.component";
import {RentCallComponent} from "./call/rent/rent-call.component";
import {MatSelectModule} from "@angular/material/select";
import {DeliverCallComponent} from "./call/deliver/deliver-call.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeaderImageComponent,
    ButtonChoiceComponent,
    UserComponent,
    CallComponent,
    PlanComponent,
    StoresComponent,
    TransportComponent,
    OrdersComponent,
    TransportToMeComponent,
    RentComponent,
    ProfileComponent,
    StoreManagementComponent,
    TransportCallComponent,
    RentCallComponent,
    DeliverCallComponent,
    StoresCallComponent

  ],
  imports: [
    FlexLayoutModule,
    AppRoutingModule,
    UserRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    FormsModule,
    PlanRoutingModule,
    CallRoutingModule,
    StoreRoutingModule,
    MatSelectModule
  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
