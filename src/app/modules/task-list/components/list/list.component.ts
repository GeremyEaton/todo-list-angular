import { Component, OnInit, OnDestroy } from '@angular/core';

import { Task } from '@models/task';
import { MatDialog } from '@angular/material';
import { DialogRemoveTaskComponent } from '../dialog-remove-task/dialog-remove-task.component';
import { TasksService } from '@core/services/tasks.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-task-list--list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [TasksService]
})
export class ListComponent implements OnInit, OnDestroy {
  list: Task[];
  tasksSubscription: Subscription;

  public items: Observable<any>;

  constructor(
    private tasksService: TasksService,
    public dialogRef: MatDialog  ) {
  }

  ngOnInit() {
    this.tasksSubscription = this.tasksService.tasksSubject.subscribe(
      (tasks: Task[]) => {
        this.list = tasks;
      }
    );
    this.tasksService.emitTasks();
  }
  ngOnDestroy() {
    this.tasksSubscription.unsubscribe();
  }

  toggleComplete(_currentTask: any) {
    let taskToUpdate;

    this.tasksService
      .getTask(_currentTask.value)
      .then(task => (taskToUpdate = task));

    taskToUpdate.completed = _currentTask.selected;

    console.log(taskToUpdate);
    this.tasksService.updateTaskById(_currentTask.value);
  }

  addTask(_inputElement) {
    if (!_inputElement.value) {
      return null;
    }

    let task = new Task();
    task.title = _inputElement.value;
    _inputElement.value = '';

    this.tasksService.createTask(task);
  }

  removeTask($event: Event, _task: Task) {
    $event.stopPropagation();
    this.openDialog(_task);
  }

  openDialog(_task: Task) {
    const dialogRef = this.dialogRef.open(DialogRemoveTaskComponent, {
      data: _task
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return null;
      }

      this.tasksService.removeTask(_task);
    });
  }
}
