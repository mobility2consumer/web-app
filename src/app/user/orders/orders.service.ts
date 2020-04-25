import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {StoreDto} from "../dtos/store.dto";
import {OrderDto} from "../dtos/order.dto";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  orders = [
    {
      name: 'Order1',
      type: 'Transport',
      approved: false,
      paid: true,
    },
    {
      name: 'Order2',
      type: 'Rent',
      approved: true,
      paid: true,
    },
    {
      name: 'Order3',
      type: 'Transport',
      approved: true,
      paid: true,
    },
  ]

  constructor() {
  }

  getOrders(): Observable<OrderDto[]> {
    return new Observable((subscriber) => {
      subscriber.next(this.orders);
    })
  }
}
