import { Component, OnInit } from '@angular/core';
import {OrdersService} from "./orders.service";
import {OrderDto} from "../dtos/order.dto";
import {Observable} from "rxjs";
import {NavbarService} from "../../navbar/navbar.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Observable<OrderDto[]>;

  constructor(private ordersService: OrdersService, private navbarService: NavbarService) { }

  ngOnInit(): void {
    this.navbarService.update('user');
    this.orders = this.ordersService.getOrders();
  }

}
