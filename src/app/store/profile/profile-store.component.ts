import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {NavbarService} from "../../navbar/navbar.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile-store.component.html',
  styleUrls: ['./profile-store.component.scss']
})
export class ProfileStoreComponent implements OnInit {

  constructor(private navbarService: NavbarService) {
  }

  ngOnInit(): void {
    this.navbarService.update('store');
  }

}
