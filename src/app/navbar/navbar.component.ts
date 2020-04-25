import { Component, OnInit } from '@angular/core';
import {NavbarService} from "./navbar.service";
import {Observable} from "rxjs";
import {MenuEntryDto} from "./dtos/menu-entry.dto";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menu : Observable<MenuEntryDto[]>;
  add: Observable<boolean>;
  constructor(private navbarService: NavbarService) { }

  ngOnInit(): void {
    this.menu = this.navbarService.getMenus();
    this.add = this.navbarService.getAdd();
  }

}
