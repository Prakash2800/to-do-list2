import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CounterService} from './counterService.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers : [CounterService]
})
export class CounterComponent implements OnInit {
  private countResult: number = 0;
  negativeCount: boolean = false;

  constructor(
      private changeRef: ChangeDetectorRef,
      private counterService: CounterService
  ) {

  }

  ngOnInit() {
  }

  private increaseCounter = () => {
      this.counterService.incrementCounter();
      this.countResult = this.counterService.Item;
      this.changeRef.markForCheck();
      if (this.countResult > 100) {
          console.log("Negative value");
          this.negativeCount = true;
      }
  }

  private decreaseCounter = () => {
      this.counterService.decrementCounter();
      this.countResult = this.counterService.Item;
      this.changeRef.markForCheck();
      if (this.countResult < 0) {
          console.log("Negative value");
          this.negativeCount = true;
      }
  }

  private resetCounter = () => {
      this.counterService.resetAll();
      this.countResult = this.counterService.Item;
      this.changeRef.markForCheck();
  }

}
