import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {NavbarService} from "../navbar/navbar.service";
import {UserService} from "../user/user.service";
import {CallService} from "./call.service";

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent implements OnInit {
  choice: Observable<any>;

  constructor(private navbarService: NavbarService, private callService: CallService) {
  }

  ngOnInit(): void {
    this.navbarService.update('call');
    this.choice = this.callService.getChoices()
  }

}
