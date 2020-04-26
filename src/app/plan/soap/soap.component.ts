import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NavbarService} from "../../navbar/navbar.service";
import {SoapService} from "./soap.service";
import {Observable} from "rxjs";
import {UserDto} from "../dtos/user.dto";
import {ShopsDto} from "../dtos/shop.dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-transport',
  templateUrl: './soap.component.html',
  styleUrls: ['./soap.component.scss']
})
export class SoapComponent implements OnInit {
  users: Observable<UserDto[]>;
  shops: Observable<ShopsDto[]>;
  loading = false;
  constructor(private navbarService: NavbarService, private soapService: SoapService, private router: Router) {
  }

  ngOnInit(): void {
    this.navbarService.update('plan');
    this.navbarService.callSubject.next(false);
    this.users = this.soapService.getUsers();
    this.shops = this.soapService.getShops();
  }
  startSimulation(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/plan/results']);
    }, 5000);  //5s
  }
}
