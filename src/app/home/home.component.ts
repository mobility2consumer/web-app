import { Component, OnInit } from '@angular/core';
import {AnswerDto} from "./dtos/answer.dto";
import {Observable} from "rxjs";
import {HomeService} from "./home.service";
import {NavbarService} from "../navbar/navbar.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  image = 'assets/img/hand.jpg';
  answers: Observable<AnswerDto[]>;

  constructor(private navbarService: NavbarService, private homeService: HomeService) { }

  ngOnInit(): void {
    this.navbarService.update('');
    this.answers = this.homeService.getAnswers();
  }

}
