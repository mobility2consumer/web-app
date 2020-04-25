import {Component, OnInit} from '@angular/core';
import {NavbarService} from "../../navbar/navbar.service";
import {UserService} from "../user.service";
import {Observable} from "rxjs";
import {StoreDto} from "../dtos/store.dto";
import {StoresService} from "./stores.service";

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {
  stores: Observable<StoreDto[]>;
  pharma: Observable<StoreDto[]>;

  constructor(private navbarService: NavbarService, private storesService: StoresService) {
  }

  ngOnInit(): void {
    this.navbarService.update('user');
    this.navbarService.callSubject.next(false);
    this.stores = this.storesService.getGroceries();
    this.pharma = this.storesService.getPharma();

  }

}
