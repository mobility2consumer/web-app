import {Component, Input, OnInit} from '@angular/core';
import {UserDto} from "../../dtos/user.dto";

@Component({
  selector: 'app-user-entry',
  templateUrl: './user-entry.component.html',
  styleUrls: ['./user-entry.component.scss']
})
export class UserEntryComponent implements OnInit {

  @Input() user: UserDto;

  constructor() {
  }

  ngOnInit(): void {
  }

}
