import { Component, OnInit, ElementRef, ViewEncapsulation} from '@angular/core';

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

  public open(keyMenu:boolean, val:boolean) {
    console.log("------------");
    console.log(keyMenu ? "from Menu" : "from Btn");
    console.log("val "+val);
    console.log("isMenuOpen = "+this.isMenuOpen);

    if (keyMenu == false) {
      console.log("is Btn");
      if (this.isMenuOpen == false){
        this.isMenuOpen = true;  
      }
    }  else if (keyMenu == true && val == false){
      console.log("is Menu");
      this.isMenuOpen = false;
    }
    
    
    console.log("set:");
    console.log("isMenuOpen = "+this.isMenuOpen);
  }

  // public closeMenu(){
  //   this.tabMenuBtn = false;
  //   this.isMenuOpen = false;
  // }

  ngOnInit(): void {
  }

  onTabChange(e: any) {
    this.tabindex = e;
  }

}

