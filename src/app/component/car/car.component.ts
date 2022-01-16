import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name:string| undefined;
  model:string| undefined;
  speed:number| undefined;
  colors:Colors;
  options:string[];
  isEdit:boolean;
  btnFlag = false;

  constructor() {
    this.name = 'mercedes';
    this.model = 'e220';
    this.speed = 235;
    this.colors = {
      car:'while',
      salon:'red',
      wheels:'silver'
    };
    this.options = ["abs", "pilot", "parking"];
    this.isEdit = false;
  }

  showEdit(){
    this.isEdit =!this.isEdit;
  }

 

  //инициализация при создании компонента, после конструктора
  ngOnInit() {
    this.name = 'mercedes';
    this.model = 'e220';
    this.speed = 235;
    this.colors = {
      car:'while',
      salon:'red',
      wheels:'silver'
    };
    this.options = ["abs", "autopilot", "parking"];
  }

  carSelect(carName:string) {
    if (carName == 'bmw'){
      this.name = 'bmw';
      this.model = 'x5';
      this.speed = 250;
      this.colors = {
        car:'black',
        salon:'red',
        wheels:'silver'
      };
      this.options = ["abs", "autopilot", "parking"];
    } else if (carName == 'audi') {
      this.name = 'audi';
      this.model = 'q3';
      this.speed = 230;
      this.colors = {
        car:'black',
        salon:'red',
        wheels:'silver'
      };
      this.options = ["abs", "autopilot", "parking"];
    } else if (carName == 'mercedes') {
      this.name = 'mercedes';
      this.model = 'gla';
      this.speed = 240;
      this.colors = {
        car:'black',
        salon:'red',
        wheels:'silver'
      };
      this.options = ["abs", "autopilot", "parking"];
    }
  }

  addOpt(option:string){
    this.options.unshift(option);
    return false;
  }

  deleteOpt(option:string) {
      for(let i=0; i<this.options.length; i++){
        if (this.options[i] == option){
          this.options.splice(i, 1);
          break;
        }
      }
  }
}

interface Colors {
  car:string,
  salon:string,
  wheels:string
}
