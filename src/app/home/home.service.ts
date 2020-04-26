import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {AnswerDto} from "./dtos/answer.dto";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  answers = [
    {
      image: 'assets/icons/user.svg',
      title: 'User',
      subtitle: 'Book your transport product and discover affiliated shops',
      color: '#4CAF50',
      link: '/user'
    },
    {
      image: 'assets/icons/call.svg',
      title: 'Receptionist',
      subtitle: 'Book a transport product for a calling user',
      color: '#00BCD4',
      link: '/call'

    },
    {
      image: 'assets/icons/store.svg',
      title: 'Store',
      subtitle: 'Request delivery',
      color: '#F44336',
      link: '/store'
    },
    {
      image: 'assets/icons/bus.svg',
      title: 'PT Operator',
      subtitle: 'Analyse requests, DSS and planning',
      color: '#FF9800',
      link: '/plan'
    },

  ]

  constructor() {
  }

  getAnswers(): Observable<AnswerDto[]> {
    return new Observable((subscriber) => {
      subscriber.next(this.answers);
    })
  }
}
