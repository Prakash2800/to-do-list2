import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CounterService {
    private item = 5;
    public count$: BehaviorSubject<number>;

    constructor() {
        this.count$ = new BehaviorSubject(this.item);
    }

    public incrementCounter() {
        this.item ++;
        this.count$.next(this.item);
    }

    public decrementCounter() {
        this.item --;
        this.count$.next(this.item);
    }

    public resetAll() {
        this.item = 0;
        this.count$.next(this.item);
    }
}
