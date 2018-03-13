import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
    Item: number = 0;

    public incrementCounter = () => {
        this.Item ++;
    }

    public decrementCounter = () => {
        this.Item --;
    }

    public resetAll = () => {
        this.Item = 0;
    }
}
