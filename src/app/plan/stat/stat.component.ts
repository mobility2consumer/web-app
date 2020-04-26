import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {NavbarService} from "../../navbar/navbar.service";

@Component({
  selector: 'app-profile',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {

  constructor(private navbarService: NavbarService) {
  }

  ngOnInit(): void {
    this.navbarService.update('plan');
    this.navbarService.callSubject.next(false);
  }

}
