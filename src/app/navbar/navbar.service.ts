import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {MenuEntryDto} from "./dtos/menu-entry.dto";

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  menus: MenuEntryDto[] = [
    {
      icon: 'home',
      text: 'Home',
      link: '/'
    },
    {
      icon: 'directions_bus',
      text: 'Journeys',
      link: '/journeys'
    },
    {
      icon: 'store',
      text: 'Orders',
      link: '/orders'
    },
    {
      icon: 'account_circle',
      text: 'Profile',
      link: '/profile'
    }
  ]

  navbarSubject = new BehaviorSubject([]);
  navbarObs = this.navbarSubject.asObservable();
  addSubject = new BehaviorSubject(false);
  addObs = this.addSubject.asObservable();

  constructor() {
  }

  getMenus(): Observable<MenuEntryDto[]> {
    return this.navbarObs;
  }
  getAdd(): Observable<boolean> {
    return this.addObs;
  }

  update(id: string) {
  }


}
