import { Component, OnInit } from '@angular/core';
import {OrdersService} from "./orders.service";
import {OrderDto} from "../dtos/order.dto";
import {Observable} from "rxjs";
import {NavbarService} from "../../navbar/navbar.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders-store.component.html',
  styleUrls: ['./orders-store.component.scss']
})
export class OrdersStoreComponent implements OnInit {
  orders: Observable<OrderDto[]>;

  constructor(private ordersService: OrdersService, private navbarService: NavbarService) { }

  ngOnInit(): void {
    this.navbarService.update('store');
    this.orders = this.ordersService.getOrders();
  }

}
