import {Component, Input, OnInit} from '@angular/core';
import {ShopsDto} from "../../dtos/shop.dto";

@Component({
  selector: 'app-shop-entry',
  templateUrl: './shop-entry.component.html',
  styleUrls: ['./shop-entry.component.scss']
})
export class ShopEntryComponent implements OnInit {

  @Input() shop: ShopsDto;

  constructor() {
  }

  ngOnInit(): void {
  }

}
