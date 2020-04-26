import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {AnswerDto} from "../../home/dtos/answer.dto";
import {StoreDto} from "../dtos/store.dto";

@Injectable({
  providedIn: 'root'
})
export class StoresService {

  stores = [
    {
      image: 'assets/icons/groceries.svg',
      title: 'Bread Pitt',
      subtitle: 'Your beautiful baker',
      mail: 'info@breadpitt.com',
      phone: '+39 123456789',
      website: 'breadpitt.com',
      color: '#4CAF50',
      link: '/user'
    },
    {
      image: 'assets/icons/groceries.svg',
      title: 'Finest Foods',
      subtitle: 'Description Finest Foods',
      mail: 'info@finestfoods.com',
      phone: '+39 123456789',
      website: 'breadpitt.com',
      color: '#00BCD4',
      link: '/call'

    },
    {
      image: 'assets/icons/groceries.svg',
      title: 'Gro And Go',
      subtitle: 'Description Gro And Go',
      mail: 'info@groandgo.com',
      phone: '+39 123456789',
      website: 'groandgo.com',
      color: '#F44336',
      link: '/store'
    },
    {
      image: 'assets/icons/groceries.svg',
      title: 'Apples To Oranges',
      subtitle: 'Description Apples To Oranges',
      mail: 'info@ato.com',
      phone: '+39 123456789',
      website: 'ato.com',
      color: '#FF9800',
      link: '/plan'
    },
  ]

  pharma = [
    {
      image: 'assets/icons/groceries.svg',
      title: ' Max Health',
      subtitle: 'Pharmacy',
      mail: 'info@breadpitt.com',
      phone: '+39 123456789',
      website: 'breadpitt.com',
      color: '#4CAF50',
      link: '/user'
    },
    {
      image: 'assets/icons/groceries.svg',
      title: ' Be Well',
      subtitle: 'Pharmacy',
      mail: 'info@finestfoods.com',
      phone: '+39 123456789',
      website: 'breadpitt.com',
      color: '#00BCD4',
      link: '/call'

    },
    {
      image: 'assets/icons/groceries.svg',
      title: ' Everyday Drugs',
      subtitle: 'Pharmacy',
      mail: 'info@groandgo.com',
      phone: '+39 123456789',
      website: 'groandgo.com',
      color: '#F44336',
      link: '/store'
    },
    {
      image: 'assets/icons/groceries.svg',
      title: ' The Chemist',
      subtitle: 'Pharmacy',
      mail: 'info@ato.com',
      phone: '+39 123456789',
      website: 'ato.com',
      color: '#FF9800',
      link: '/plan'
    },
  ]


  constructor() {
  }

  getGroceries(): Observable<StoreDto[]> {
    return new Observable((subscriber) => {
      subscriber.next(this.stores);
    })
  }
  getPharma(): Observable<StoreDto[]> {
    return new Observable((subscriber) => {
      subscriber.next(this.pharma);
    })
  }
}
