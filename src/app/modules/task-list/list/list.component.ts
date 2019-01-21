import { Component, OnInit } from '@angular/core';

import { Task } from '@models/task';
import { TodoDataService } from '../service/todo-data.service';

@Component({
  selector: 'app-task-list--list',
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
      // sort by descending ID
      .sort((a, b) => {
        return b.id - a.id;
      });
  }

  updateTaskListCompleted() {
    this.listCompleted = this.todoDataService
      .getTasks()
      .filter(task => task.completed);
  }

  toggleComplete(_currentTask: any) {
    this.todoDataService.updateTaskById(_currentTask.value, {
      completed: _currentTask.selected
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

  removeTask($event: Event, _taskId: Task['id']) {
    $event.stopPropagation();
    this.todoDataService.removeTask(_taskId);
    this.updateList();
  }
}
