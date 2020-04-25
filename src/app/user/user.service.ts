import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {AnswerDto} from "./dtos/answer.dto";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  answers = [
    {
      image: 'assets/icons/bus.svg',
      title: 'Transport me!',
      subtitle: 'Transport me wherever I want!',
      color: '#4CAF50',
      link: '/user/request-transport'
    },
    {
      image: 'assets/icons/bus.svg',
      title: 'Transport to me!',
      subtitle: 'Transport some people for me!',
      color: '#00BCD4',
      link: '/user/request-transport-to-me'

    },
    {
      image: 'assets/icons/bike.svg',
      title: 'Rent!',
      subtitle: 'Rent a vehicle for a period of time!',
      color: '#F44336',
      link: '/user/rent'
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
