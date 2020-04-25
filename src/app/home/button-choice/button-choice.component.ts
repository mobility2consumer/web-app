import {Component, Input, OnInit} from '@angular/core';
import {AnswerDto} from "../dtos/answer.dto";

@Component({
  selector: 'app-button-choice',
  templateUrl: './button-choice.component.html',
  styleUrls: ['./button-choice.component.scss']
})
export class ButtonChoiceComponent implements OnInit {

  @Input() question: string;
  @Input() answers: AnswerDto[];
  constructor() { }

  ngOnInit(): void {
  }

}
