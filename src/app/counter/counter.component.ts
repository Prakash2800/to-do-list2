import {Component, OnInit} from '@angular/core';
import {CounterService} from './counterService.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})

export class CounterComponent implements OnInit {
  public countResult = 0;
  disableButtonMinus = true;
  disableButtonPlus = false;

  constructor(
      private counterService: CounterService
  ) {

  }

  ngOnInit() {
      this.counterService.count$.subscribe((currentValue) => {this.countResult = currentValue; });
  }

  public increaseCounter() {
      this.counterService.incrementCounter();
      this.disableButtonMinus = false;
      if (this.countResult >= 10) {
          this.disableButtonPlus = true;
      }
  }

  public decreaseCounter() {
      this.counterService.decrementCounter();
      this.disableButtonPlus = false;
      if (this.countResult <= 0) {
          this.disableButtonMinus = true;
      }
  }

  public resetCounter() {
      this.counterService.resetAll();
  }

}
