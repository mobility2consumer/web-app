import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {AnswerDto} from "./dtos/answer.dto";

@Injectable({
  providedIn: 'root'
})
export class StoreManagementService {

  answers = [
    {
      image: 'assets/icons/bike.svg',
      title: 'Rent',
      subtitle: 'Rent a vehicle for a period of time!',
      color: '#00bcd4',
      link: '/store/rent'
    },
    {
      image: 'assets/icons/store.svg',
      title: 'Deliver',
      subtitle: 'Deliver a package for a store!',
      color: '#F44336',
      link: '/call/soap'
    }
  ]

  constructor() {
  }

  getChoices(): Observable<AnswerDto[]> {
    return new Observable((subscriber) => {
      subscriber.next(this.answers);
    })
  }
}
