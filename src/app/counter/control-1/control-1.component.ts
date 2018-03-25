import { Component, OnInit } from '@angular/core';
import {CounterService} from '../counterService.service';

@Component({
  selector: 'app-control-1',
  templateUrl: './control-1.component.html',
  styleUrls: ['./control-1.component.scss']
})
export class Control1Component implements OnInit {
  private countrolResult = 0;
  constructor(
      private counterService: CounterService
  ) { }

  ngOnInit() {
      this.counterService.count$.subscribe((currentValue) => {this.countrolResult = currentValue;});
  }

  private increaseCounter() {
      this.counterService.incrementCounter();
  }

  private decreaseCounter() {
      this.counterService.decrementCounter();
  }

  private resetCounter() {
      this.counterService.resetAll();
  }

}
