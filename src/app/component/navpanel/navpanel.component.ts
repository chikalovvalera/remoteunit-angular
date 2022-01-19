import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navpanel',
  templateUrl: './navpanel.component.html',
  styleUrls: ['./navpanel.component.css']
})
export class NavpanelComponent implements OnInit {

  @Input()
  isMenuOpen!:boolean;
  @Input()
  links!:Array<string>;

  constructor() {

  }

  ngOnInit(): void {
  }

}
