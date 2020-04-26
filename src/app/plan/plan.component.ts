import {Component, OnInit} from '@angular/core';
import {NavbarService} from "../navbar/navbar.service";
import {PlanService} from "./plan.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  choices: Observable<any>;
  constructor(private navbarService: NavbarService, private planService: PlanService) {
  }

  ngOnInit(): void {
    this.navbarService.update('plan');
    this.navbarService.callSubject.next(false);
    this.choices = this.planService.getChoices();
  }

}
