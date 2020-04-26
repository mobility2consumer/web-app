import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {UserDto} from "../dtos/user.dto";
import {ShopsDto} from "../dtos/shop.dto";
import {StopsDto} from "../dtos/stop.dto";

@Injectable({
  providedIn: 'root'
})
export class SoapService {


  users: UserDto[] = [
    {
      type: "User",
      name: "User1",
      phone: "333-1111111",
      address: "Corso Europa, 3, 12051 Alba CN",
      time: "4/30/2020 9:00",
      dest: "Comune di Alba, Piazza Risorgimento, 1, 12051 Alba CN",
      roundtrip: false,
      returnTime: "",
      returnDest: "",
      img: "assets/icons/moustache-color.svg"
    },
    {
      type: "User",
      name: "User2",
      phone: "333-3333333",
      address: "Corso Canale, 28, 12051 Mussotto CN",
      time: "4/30/2020 12:00",
      dest: "Ospedale Santo Spirito, Via Vittorio Emanuele II, 3, 12042 Bra CN",
      roundtrip: false,
      returnTime: "",
      returnDest: "",
      img: "assets/icons/woman-color.svg"
    },
    {
      type: "User",
      name: "User3",
      phone: "333-4444444",
      address: "SP153, 23, 12069 Pocapaglia CN",
      time: "4/30/2020 15:00",
      dest: "Ospedale Santo Spirito, Via Vittorio Emanuele II, 3, 12042 Bra CN",
      roundtrip: false,
      returnTime: "",
      returnDest: "",
      img: "assets/icons/moustache-color.svg"
    }
  ]

  shops: ShopsDto[] = [
    {
      type: "Shop",
      name: "Prestofresco",
      phone: "0173 441854",
      address: "Corso Piave, 58, 12051 Alba CN",
      time: "4/30/2020 8:00",
      dest: "Corso Asti, 24, Alba CN",
      phoneDest: "333-2222222",
      id: 1
    },
    {
      type: "Shop",
      name: "Ortobra Superfreschi Srl",
      phone: "0173 281258",
      address: "Corso Piave, 31, 12051 Alba CN",
      time: "4/30/2020 8:00",
      dest: "Corso Asti, 24, Alba CN",
      phoneDest: "333-2222222",
      id: 2
    },
    {
      type: "Shop",
      name: "Lidl",
      phone: "0173 555555",
      address: "Lidl, Corso IV Novembre, 50, 12042 Bra CN",
      time: "4/30/2020 9:00",
      dest: "Cherasco, 12062 CN",
      phoneDest: "333-5555555",
      id: 3
    }
  ]

  stops: StopsDto[] = [
    {
      stops: 1,
      type: "Shop",
      name: "Prestofresco",
      phone: "0173 441854",
      address: "Corso Piave, 58, 12051 Alba CN",
      time: "4/30/2020 8:00",
      dest: "Corso Asti, 24, Alba CN",
      id: [1],
      packageUp: 4,
      packageDown: 0,
      peopleUp: 0,
      peopleDown: 0,
    },
    {
      stops: 2,
      type: "Shop",
      name: "Ortobra Superfreschi Srl",
      phone: "0173 281258",
      address: "Corso Piave, 31, 12051 Alba CN",
      time: "4/30/2020 8:00",
      dest: "Corso Asti, 24, Alba CN",
      id: [2],
      packageUp: 2,
      packageDown: 0,
      peopleUp: 0,
      peopleDown: 0,
    },
    {
      stops: 3,
      type: "User",
      name: "User1",
      phone: "333-1111111",
      address: "Corso Europa, 3, 12051 Alba CN",
      time: "4/30/2020 8:15",
      dest: "Comune di Alba, Piazza Risorgimento, 1, 12051 Alba CN",
      id: [],
      packageUp: 0,
      packageDown: 0,
      peopleUp: 2,
      peopleDown: 0,
    },
    {
      stops: 4,
      type: "User",
      name: "User1",
      phone: "",
      address: "Comune di Alba, Piazza Risorgimento, 1, 12051 Alba CN",
      time: "",
      dest: "",
      id: [],
      packageUp: 0,
      packageDown: 0,
      peopleUp: 0,
      peopleDown: 2,
    },
    {
      stops: 5,
      type: "Shop",
      name: "Delivery ID 0001 - 0002",
      phone: "333-2222222",
      address: "Corso Asti, 24, Alba CN",
      time: "",
      dest: "",
      id: [1, 2],
      packageUp: 0,
      packageDown: 6,
      peopleUp: 0,
      peopleDown: 0,
    },
    {
      stops: 6,
      type: "User",
      name: "User2",
      phone: "333-3333333",
      address: "Corso Canale, 28, 12051 Mussotto CN",
      time: "4/30/2020 8:30",
      dest: "Ospedale Santo Spirito, Via Vittorio Emanuele II, 3, 12042 Bra CN",
      id: [],
      packageUp: 0,
      packageDown: 0,
      peopleUp: 2,
      peopleDown: 0,
    },
    {
      stops: 7,
      type: "User",
      name: "User3",
      phone: "333-4444444",
      address: "SP153, 23, 12069 Pocapaglia CN",
      time: "4/30/2020 8:40",
      dest: "Ospedale Santo Spirito, Via Vittorio Emanuele II, 3, 12042 Bra CN",
      id: [],
      packageUp: 0,
      packageDown: 0,
      peopleUp: 1,
      peopleDown: 0,
    },
    {
      stops: 8,
      type: "User",
      name: "User2-User3",
      phone: "",
      address: "Ospedale Santo Spirito, Via Vittorio Emanuele II, 3, 12042 Bra CN",
      time: "",
      dest: "",
      id: [],
      packageUp: 0,
      packageDown: 0,
      peopleUp: 0,
      peopleDown: 3,
    },
    {
      stops: 9,
      type: "Shop",
      name: "Lidl",
      phone: "0173 555555",
      address: "Lidl, Corso IV Novembre, 50, 12042 Bra CN",
      time: "4/30/2020 9:00",
      dest: "Cherasco, 12062 CN",
      id: [3],
      packageUp: 4,
      packageDown: 0,
      peopleUp: 0,
      peopleDown: 0,
    },
    {
      stops: 10,
      type: "Shop",
      name: "Delivery ID 0003",
      phone: "",
      address: "Cherasco, 12062 CN",
      time: "",
      dest: "",
      id: [3],
      packageUp: 0,
      packageDown: 4,
      peopleUp: 0,
      peopleDown: 0,
    }
  ]

  constructor() {
  }

  getUsers(): Observable<UserDto[]> {
    return new Observable((subscriber) => {
      subscriber.next(this.users);
    })
  }

  getShops(): Observable<ShopsDto[]> {
    return new Observable((subscriber) => {
      subscriber.next(this.shops);
    })
  }

  getStops(): Observable<StopsDto[]> {
    return new Observable((subscriber) => {
      subscriber.next(this.stops);
    })
  }
}
