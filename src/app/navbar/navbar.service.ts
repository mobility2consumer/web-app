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
  addStore = {
    icon: 'add',
    text: 'Request a service',
    link: '/store'
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
    link: '/user/stat'
  }
  profileStore = {
    icon: 'store',
    text: 'Profile',
    link: '/store/stat'
  }
  space = {
    icon: '',
    text: '',
    link: ''
  }
  stat = {
    icon: 'timeline',
    text: 'Statistics',
    link: '/plan/statistics'
  }

  addPlan = {
    icon: 'control_camera',
    text: 'Control Panel',
    link: '/plan'
  }
  soap = {
    icon: 'bar_chart',
    text: 'SOAP',
    link: '/plan/soap'
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
      case 'store':
        menus.push(this.home, this.addStore, this.profileStore)
        console.log(menus)
        this.navbarSubject.next(menus)
        this.callSubject.next(true);
        break;
      case 'plan':
        menus.push(this.home, this.addPlan, this.soap, this.stat)
        console.log(menus)
        this.navbarSubject.next(menus)
        this.callSubject.next(true);
        break;
    }
  }


}
