import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-image',
  templateUrl: './header-image.component.html',
  styleUrls: ['./header-image.component.scss']
})
export class HeaderImageComponent implements OnInit {

  @Input() image: string;
  @Input() title: string;
  @Input() subtitle: string;
  constructor() { }

  ngOnInit(): void {
  }

}
