import { Component, OnInit, ViewEncapsulation} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  isMenuOpen: boolean;
  tabindex: number;

  constructor() {
    this.tabindex = 0;
    this.isMenuOpen = false;
  }

  setMenuVisible(val:any){
    this.isMenuOpen = val != null ? val : !this.isMenuOpen;
  }

  ngOnInit(): void {
  }

  onTabChange(e: any) {
    this.tabindex = e;
  }

}

