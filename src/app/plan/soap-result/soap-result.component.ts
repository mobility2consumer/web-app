import {Component, OnInit} from '@angular/core';
import {NavbarService} from "../../navbar/navbar.service";
import {Observable} from "rxjs";
import {StopsDto} from "../dtos/stop.dto";
import {SoapService} from "../soap/soap.service";

@Component({
  selector: 'app-soap-result',
  templateUrl: './soap-result.component.html',
  styleUrls: ['./soap-result.component.scss']
})
export class SoapResultComponent implements OnInit {

  constructor(private navbarService: NavbarService, private soapService: SoapService) {
  }

  vehicle = [3, 4, 2];
  stops$: Observable<StopsDto[]>;

  ngOnInit(): void {
    this.navbarService.update('plan');
    this.navbarService.callSubject.next(false);
    this.stops$ = this.soapService.getStops();
  }

  getArray(number: number) {
    return Array(number).fill(0);
  }
}
