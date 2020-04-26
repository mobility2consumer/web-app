import {Component, Input, OnInit} from '@angular/core';
import {ShopsDto} from "../../dtos/shop.dto";
import {StopsDto} from "../../dtos/stop.dto";

@Component({
  selector: 'app-stop-entry',
  templateUrl: './stop-entry.component.html',
  styleUrls: ['./stop-entry.component.scss']
})
export class StopEntryComponent implements OnInit {

  @Input() stop: StopsDto;

  constructor() {
  }

  ngOnInit(): void {
  }

}
