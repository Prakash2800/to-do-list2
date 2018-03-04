import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  countResult = 0;
  negativeCount: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  private increaseCounter = () => {
      // if (this.countResult < 0) {
      //     this.negativeCount = true;
      // }
      this.countResult ++;
  }

  private decreaseCounter = () => {
      console.log('-25');
      this.countResult --;
  }

}
