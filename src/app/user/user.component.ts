import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../navbar/navbar.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private navbarService: NavbarService) {
  }

  ngOnInit(): void {
    this.navbarService.update('user');
  }

}
