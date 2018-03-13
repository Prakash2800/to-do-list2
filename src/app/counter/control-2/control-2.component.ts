import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-2',
  templateUrl: './control-2.component.html',
  styleUrls: ['./control-2.component.scss']
})
export class Control2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private increaseCounter = () => {
      console.log("i am increment from control-2");
  }

  private decreaseCounter = () => {
      console.log("i am decrement from control-2");
  }

  private resetCounter = () => {
      console.log("i am reset from control-2");
  }

}
