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
  @Output() onCloseBtn = new EventEmitter<boolean>()

  @Input()
  links!:Array<string>;

  onclose(){
    this.isOpen = false;
    this.onCloseBtn.emit(false);
  }

  constructor() {

  }

  ngOnInit(): void {
  }

}
