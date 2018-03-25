import { Component, OnInit } from '@angular/core';
import {ToDoListService} from '../services/toDoListService.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
  providers: [ToDoListService]
})
export class ToDoListComponent implements OnInit {

  addItem = '';

  constructor(private toDoListService: ToDoListService) { }

  ngOnInit() {
  }

  // public addList(): void {
  //     this.toDoListService.pushItem (this.addItem);
  //     this.addItem = '';
  // }

  public addList = (): void => {
    this.toDoListService.pushItem (this.addItem);
    this.addItem = '';
  }

  // public removeList(index): void {
  //   this.toDoListService.removeItem(index);
  // }

  // pushItem = () => {
  //   if (this.addItem !== '') {
  //       this.items.push(this.addItem);
  //       this.addItem = '';
  //   }
  // }
  //
  public removeItem = (index) => {
    this.toDoListService.items.splice(index, 1);
  }


}
