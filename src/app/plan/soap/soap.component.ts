import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NavbarService} from "../../navbar/navbar.service";
import {SoapService} from "./soap.service";
import {Observable} from "rxjs";
import {UserDto} from "../dtos/user.dto";
import {ShopsDto} from "../dtos/shop.dto";

@Component({
  selector: 'app-transport',
  templateUrl: './soap.component.html',
  styleUrls: ['./soap.component.scss']
})
export class SoapComponent implements OnInit {
  users: Observable<UserDto[]>;
  shops: Observable<ShopsDto[]>;

  constructor(private navbarService: NavbarService, private soapService: SoapService) {
  }

  ngOnInit(): void {
    this.navbarService.update('plan');
    this.navbarService.callSubject.next(false);
    this.users = this.soapService.getUsers();
    this.shops = this.soapService.getShops();
  }
}
