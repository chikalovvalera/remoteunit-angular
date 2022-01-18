import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  maxSizeHeader: boolean = true;
  tabindex: number;

  constructor() {
    this.tabindex = 0;
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) onscroll() {
    // if (window.scrollY > 10) {
    //   this.maxSizeHeader = false;
    // } else {
    //   this.maxSizeHeader = true;
    // }
  }

  closeHeader(e:Event){
    this.maxSizeHeader = !this.maxSizeHeader;
  }

  onTabChange(e: any) {
    if (this.tabindex = e) {
      console.log(e)
      this.tabindex = e;
      if (e == 3) {
        return "<app-about></app-about>";
      }
    }
    return "";
  }

}

