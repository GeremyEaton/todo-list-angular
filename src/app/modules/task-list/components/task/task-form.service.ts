import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Task } from '@models/task';

import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { TasksService } from '@core/services/tasks.service';

@Injectable()
export class TaskFormService {
  task: Task;
  form: FormGroup;

  constructor(
    private tasksService: TasksService,
    public snackBar: MatSnackBar,
    private router: Router
  ) {}

  saveTask() {
    if (!this.form.valid) {
      return this.snackBar.open('Un problème est survenu !', '', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
    }

    this.tasksService.updateTaskById(this.task.id, this.form.value);
    let snackBarRef = this.snackBar.open(
      'Votre tâche a bien été enregistré',
      'Retour à la liste',
      {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      }
    );

    snackBarRef.onAction().subscribe(() => {
      this.router.navigate(['/task-list/list']);
    });
  }

  initFormTask(_task: Task) {
    if (!_task) {
      return null;
    }

    this.task = _task;
    this.form = new FormGroup({
      title: new FormControl(_task.title || '', [Validators.required]),
      description: new FormControl(_task.description || '')
    });
  }

}
