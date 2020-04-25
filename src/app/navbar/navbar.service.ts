import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {MenuEntryDto} from "./dtos/menu-entry.dto";

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  home = {
    icon: 'home',
    text: 'Home',
    link: '/'
  }
  journeys = {
    icon: 'directions_bus',
    text: 'Journeys',
    link: '/journeys'
  }
  store = {
    icon: 'store',
    text: 'Orders',
    link: '/orders'
  }
  profile = {
    icon: 'account_circle',
    text: 'Profile',
    link: '/profile'
  }
  space = {
    icon: '',
    text: '',
    link: ''
  }

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
    const menus = []
    switch (id) {
      case '':
        this.navbarSubject.next([])
        this.addSubject.next(false);
        break;
      case 'user':
        menus.push(this.home, this.journeys, this.space,this.store, this.profile)
        console.log(menus)
        this.navbarSubject.next(menus)
        this.addSubject.next(true);
        break;
    }
  }


}
