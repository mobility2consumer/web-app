import { Component, OnInit } from '@angular/core';
import {AnswerDto} from "./dtos/answer.dto";
import {Observable} from "rxjs";
import {HomeService} from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  image = 'assets/img/hand.jpg';
  answers: Observable<AnswerDto[]>;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.answers = this.homeService.getAnswers();
  }

}
