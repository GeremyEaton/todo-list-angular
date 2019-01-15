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
      .filter(task => !task.completed)
      .sort((a, b) => {
        return b.id - a.id;
      });
  }

  updateTaskListCompleted() {
    this.listCompleted = this.todoDataService
      .getTasks()
      .filter(task => task.completed);
  }

  toggleComplete(currentTask: any) {
    this.todoDataService.updateTaskById(currentTask.value, {
      completed: currentTask.selected
    });
    this.updateList();
  }

  addTask(_inputElement) {
    if (!_inputElement.value) {
      return null;
    }
    
    let task = this.todoDataService.initNewTask();
    task.title = _inputElement.value;
    _inputElement.value = '';

    this.todoDataService.addNewTask(task);
    this.updateList();
  }
}
