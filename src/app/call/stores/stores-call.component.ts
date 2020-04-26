import {Component, OnInit} from '@angular/core';
import {NavbarService} from "../../navbar/navbar.service";
import {Observable} from "rxjs";
import {StoreDto} from "../dtos/store.dto";
import {StoresCallService} from "./stores-call.service";

@Component({
  selector: 'app-stores',
  templateUrl: './stores-call.component.html',
  styleUrls: ['./stores-call.component.scss']
})
export class StoresCallComponent implements OnInit {
  stores: Observable<StoreDto[]>;
  pharma: Observable<StoreDto[]>;

  constructor(private navbarService: NavbarService, private storesService: StoresCallService) {
  }

  ngOnInit(): void {
    this.navbarService.update('user');
    this.navbarService.callSubject.next(false);
    this.stores = this.storesService.getGroceries();
    this.pharma = this.storesService.getPharma();

  }

}
