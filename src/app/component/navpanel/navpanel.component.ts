import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navpanel',
  templateUrl: './navpanel.component.html',
  styleUrls: ['./navpanel.component.css']
})
export class NavpanelComponent implements OnInit {

  @Input()
  isOpen!:boolean;

  @Output() onClose = new EventEmitter<boolean>()

  @Input()
  links!:Array<string>;

  close(){
    this.isOpen = false;
    this.onClose.emit(false);
  }

  constructor() {

  }

  ngOnInit(): void {
  }

}
