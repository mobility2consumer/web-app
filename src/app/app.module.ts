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
import {OrdersComponent} from './user/orders/orders.component';
import {TransportToMeComponent} from "./user/transport-to-me/transport-to-me.component";
import {RentComponent} from "./user/rent/rent.component";
import {MatRadioModule} from "@angular/material/radio";
import {ProfileComponent} from './user/profile/profile.component';
import {PlanRoutingModule} from "./plan/plan-routing.module";
import {CallRoutingModule} from "./call/call-routing.module";
import {StoreManagementComponent} from "./store/store-management.component";
import {TransportCallComponent} from "./call/transport/transport-call.component";
import {StoresCallComponent} from "./call/stores/stores-call.component";
import {RentCallComponent} from "./call/rent/rent-call.component";
import {MatSelectModule} from "@angular/material/select";
import {DeliverCallComponent} from "./call/deliver/deliver-call.component";
import {DeliverStoreComponent} from "./store/deliver/deliver-store.component";
import {ProfileStoreComponent} from "./store/profile/profile-store.component";
import {StoreManagementRouting} from "./store/store-management-routing.module";
import {RentStoreComponent} from "./store/rent/rent-store.component";
import {StatComponent} from "./plan/stat/stat.component";
import {SoapComponent} from "./plan/soap/soap.component";
import {OrdersStoreComponent} from "./store/orders/orders-store.component";
import { UserEntryComponent } from './plan/soap/user-entry/user-entry.component';
import { ShopEntryComponent } from './plan/soap/shop-entry/shop-entry.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { SoapResultComponent } from './plan/soap-result/soap-result.component';
import {StopEntryComponent} from "./plan/soap-result/stop-entry/stop-entry.component";

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
    StoresCallComponent,
    ProfileStoreComponent,
    DeliverStoreComponent,
    RentStoreComponent,
    StatComponent,
    SoapComponent,
    OrdersStoreComponent,
    UserEntryComponent,
    ShopEntryComponent,
    SoapResultComponent,
    StopEntryComponent
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
    StoreManagementRouting,
    MatSelectModule,
    PlanRoutingModule,
    MatProgressSpinnerModule
  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
