import { Component, OnInit } from '@angular/core';
import {OrdersCallService} from "./orders-call.service";
import {OrderDto} from "../dtos/order.dto";
import {Observable} from "rxjs";
import {NavbarService} from "../../navbar/navbar.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders-call.component.html',
  styleUrls: ['./orders-call.component.scss']
})
export class OrdersCallComponent implements OnInit {
  orders: Observable<OrderDto[]>;

  constructor(private ordersService: OrdersCallService, private navbarService: NavbarService) { }

  ngOnInit(): void {
    this.navbarService.update('user');
    this.orders = this.ordersService.getOrders();
  }

}
