import { Injectable } from '@angular/core';

@Injectable()
export class ToDoListServiceService {
    items = ['item-1', 'item-2', 'item-3' ];

    pushItem = (item: string) => {
      if (item !== '') {
          this.items.push(item);
          item = '';
      }
    }

    removeItem = (index) => {
      this.items.splice(index, 1);
    }
}
