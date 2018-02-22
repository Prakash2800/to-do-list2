import { Component, OnInit } from '@angular/core';
import {ToDoListServiceService} from '../services/toDoListService.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
  providers: [ToDoListServiceService]
})
export class ToDoListComponent implements OnInit {

  addItem = '';
  public listObj: any;

  constructor(private toDoListService: ToDoListServiceService) { }

  ngOnInit() {
      this.listObj = this.toDoListService;
  }

  public addList(): void {
      this.toDoListService.pushItem (this.addItem);
      this.addItem = '';
  }

  // public removeList(): void {
  //   this.toDoListService.removeItem(ind);
  // }

  // pushItem = () => {
  //   if (this.addItem !== '') {
  //       this.items.push(this.addItem);
  //       this.addItem = '';
  //   }
  // }
  //
  // removeItem = (index) => {
  //   this.items.splice(index, 1);
  // }


}
