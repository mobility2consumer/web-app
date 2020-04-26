import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {NavbarService} from "../navbar/navbar.service";
import {UserService} from "../user/user.service";
import {StoreManagementService} from "./store-management.service";

@Component({
  selector: 'app-call',
  templateUrl: './store-management.component.html',
  styleUrls: ['./store-management.component.css']
})
export class StoreManagementComponent implements OnInit {
  choice: Observable<any>;

  constructor(private navbarService: NavbarService, private callService: StoreManagementService) {
  }

  ngOnInit(): void {
    this.navbarService.update('store');
    this.choice = this.callService.getChoices()
  }

}
