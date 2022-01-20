import { Component, HostListener, OnInit, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
  
})
export class HeaderComponent implements OnInit {
  bigFlag:boolean = true;

  constructor() { }

  @HostListener('window:scroll', ['$event']) onscroll(){
    if (window.scrollY > 50){
      this.bigFlag = false;
    }  else {
      this.bigFlag = true;
    }
  }

  ngOnInit(): void {
  }

}
