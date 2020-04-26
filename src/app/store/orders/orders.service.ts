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
      type: 'Deliver',
      date: 'April 27th, 2020 12:30',
      paid: true,
    },
    {
      name: 'Order2',
      type: 'Rent',
      date: 'April 29th, 2020 15:00',
      paid: true,
    },
    {
      name: 'Order3',
      type: 'Deliver',
      date: 'April 30th, 2020 9:00',
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
