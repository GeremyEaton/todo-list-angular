import { Component, OnInit, OnDestroy } from '@angular/core';

import { Task } from '@models/task';
import { MatDialog } from '@angular/material';
import { DialogRemoveTaskComponent } from '../dialog-remove-task/dialog-remove-task.component';
import { TasksService } from '@core/services/tasks.service';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-task-list--list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  list: Task[];
  list$;

  constructor(
    private tasksService: TasksService,
    private dialogRef: MatDialog
  ) {
    this.list = tasksService.tasks;
  }

  ngOnInit() {
    this.list$ = this.tasksService.tasksSubject.subscribe(result => {
      this.list = result;
    });
  }
  ngOnDestroy() {
    this.list$.unsubscribe();
  }

  addTask(_inputElement: any) {
    if (!_inputElement.value) {
      return null;
    }

    this.tasksService.createTask(_inputElement.value);

    // clean input
    _inputElement.value = '';
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
      return this.tasksService.removeTask(_task);
    });
  }

  toggleComplete(_task: Task, _currentItem: any) {
    let values = {
      completed : _currentItem.selected
    }
    this.tasksService.updateTask(_task, values);
  }
}
