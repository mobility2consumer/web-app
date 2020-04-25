import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {NavbarService} from "../../navbar/navbar.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private navbarService: NavbarService) {
  }

  ngOnInit(): void {
    this.navbarService.update('user');
  }

}
