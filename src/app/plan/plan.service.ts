import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {AnswerDto} from "../user/dtos/answer.dto";

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  answers = [
    {
      image: 'assets/icons/plan.svg',
      title: 'SOAP',
      subtitle: 'Simulate and Plan!',
      color: '#4CAF50',
      link: '/plan/soap'
    },
    {

      image: 'assets/icons/stat.svg',
      title: 'PowerBI',
      subtitle: 'Show and analyze data!',
      color: '#00BCD4',
      link: '/plan/statistics'

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
