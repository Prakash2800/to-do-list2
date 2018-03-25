import { Injectable } from '@angular/core';
import {GetDataService} from './getDataService.service';

@Injectable()
export class ToDoListService {

    constructor(private getDataService: GetDataService) {}

    // items = this.getDataService.item;

    items = ['item-1', 'item-2', 'item-3' ];

    public pushItem = (item: string) => {
      if (item !== '') {
          this.items.push(item);
      }
    }

    public removeItem = (index) => {
      this.items.splice(index, 1);
    }
}
