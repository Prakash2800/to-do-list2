import { Component, OnInit } from '@angular/core';
import {CounterService} from '../counterService.service';

@Component({
  selector: 'app-control-1',
  templateUrl: './control-1.component.html',
  styleUrls: ['./control-1.component.scss']
})
export class Control1Component implements OnInit {
  private countrolResult: number = 0;
  constructor(
      private counterService: CounterService
  ) { }

  ngOnInit() {
  }

  private increaseCounter = () => {
      this.counterService.incrementCounter();
      this.countrolResult = this.counterService.Item;
  }

  private decreaseCounter = () => {
      this.counterService.decrementCounter();
      this.countrolResult = this.counterService.Item;
  }

  private resetCounter = () => {
      this.counterService.resetAll();
      this.countrolResult = this.counterService.Item;
  }

}
