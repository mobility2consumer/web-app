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
import { HomeComponent } from './home/home.component';
import { HeaderImageComponent } from './home/header-image/header-image.component';
import { ButtonChoiceComponent } from './home/button-choice/button-choice.component';
import { UserComponent } from './user/user.component';
import { CallComponent } from './call/call.component';
import { PlanComponent } from './plan/plan.component';
import { StoresComponent } from './user/stores/stores.component';
import {UserRoutingModule} from "./user/user-routing.module";
import {MatTooltipModule} from "@angular/material/tooltip";

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
    StoresComponent
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
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
