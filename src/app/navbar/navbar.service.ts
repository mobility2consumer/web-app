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
    text: 'Orders',
    link: '/user/orders'
  }
  add = {
    icon: 'add',
    text: 'Request a service',
    link: '/user'
  }
  addCall = {
    icon: 'add',
    text: 'Request a service',
    link: '/call'
  }
  storeCall = {
    icon: 'store',
    text: 'Affiliated Stores',
    link: '/call/store'
  }
  call = {
    icon: 'call',
    text: 'Call Us!',
    link: 'tel:+390123456789'
  }
  store = {
    icon: 'store',
    text: 'Affiliated Stores',
    link: '/user/store'
  }
  profile = {
    icon: 'account_circle',
    text: 'Profile',
    link: '/user/profile'
  }
  space = {
    icon: '',
    text: '',
    link: ''
  }

  navbarSubject = new BehaviorSubject([]);
  navbarObs = this.navbarSubject.asObservable();
  callSubject = new BehaviorSubject(false);
  callObs = this.callSubject.asObservable();

  constructor() {
  }

  getMenus(): Observable<MenuEntryDto[]> {
    return this.navbarObs;
  }

  getAdd(): Observable<boolean> {
    return this.callObs;
  }

  update(id: string) {
    const menus = []
    switch (id) {
      case '':
        this.navbarSubject.next([])
        this.callSubject.next(true);
        break;
      case 'user':
        menus.push(this.home, this.journeys, this.add, this.store, this.profile)
        console.log(menus)
        this.navbarSubject.next(menus)
        this.callSubject.next(true);
        break;
      case 'call':
        menus.push(this.home, this.addCall, this.storeCall)
        console.log(menus)
        this.navbarSubject.next(menus)
        this.callSubject.next(true);
        break;
    }
  }


}
