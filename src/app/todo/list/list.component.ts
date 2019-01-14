import { Component, OnInit } from '@angular/core';

import { Task } from '../class/task';
import { TodoDataService } from '../service/todo-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list: Task[];
  listUncompleted: Task[] = [];
  listCompleted: Task[] = [];

  constructor(private todoDataService: TodoDataService) {
    this.updateList();
  }

  ngOnInit() {}

  updateList() {
    this.updateTaskListUncompleted();
    this.updateTaskListCompleted();
  }

  updateTaskListUncompleted() {
    this.listUncompleted = this.todoDataService
      .getTasks()
      .filter(task => !task.completed);
  }

  updateTaskListCompleted() {
    this.listCompleted = this.todoDataService
      .getTasks()
      .filter(task => task.completed);
  }

  toggleComplete(currentTask: any) {
    this.todoDataService.updateTaskById(currentTask.value, {
      completed : currentTask.selected
    });
    this.updateList();
  }
}
