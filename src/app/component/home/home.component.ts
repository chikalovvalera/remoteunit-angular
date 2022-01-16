import { Component, OnInit, HostListener, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  
  maxSizeHeader:boolean = true;
  tabindex:number;
  constructor() {
    this.tabindex = 0;
   }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) onscroll(){
    if (window.scrollY > 50){
      this.maxSizeHeader
   = false;
    }  else {
      this.maxSizeHeader
   = true;
    }
  }
  onTabChange(e:any) {
    if (this.tabindex = e) {
      console.log(e)
      this.tabindex = e;
      if (e == 3){
        return "<app-about></app-about>";
      }
    }
    return "";

  }
}

