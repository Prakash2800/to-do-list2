import { Injectable } from '@angular/core';

@Injectable()
export class ToDoListService {
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
