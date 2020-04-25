import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../navbar/navbar.service";
import {Observable} from "rxjs";
import {UserService} from "./user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  choice: Observable<any>;

  constructor(private navbarService: NavbarService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.navbarService.update('user');
    this.choice = this.userService.getChoices()
  }

}
