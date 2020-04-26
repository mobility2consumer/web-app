import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NavbarService} from "../../navbar/navbar.service";

@Component({
  selector: 'app-transport',
  templateUrl: './soap.component.html',
  styleUrls: ['./soap.component.scss']
})
export class SoapComponent implements OnInit {

  constructor(private navbarService: NavbarService) {
  }

  ngOnInit(): void {
    this.navbarService.update('plan');
    this.navbarService.callSubject.next(false);
  }
}
