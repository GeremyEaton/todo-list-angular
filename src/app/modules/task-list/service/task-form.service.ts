import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Task } from '@models/task';

import { TodoDataService } from '../service/todo-data.service';

import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Injectable()
export class TaskFormService {
  task: Task;
  form: FormGroup;

  constructor(
    private todoDataService: TodoDataService,
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

    this.todoDataService.updateTaskById(this.task.id, this.form.value);
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

    this.setTask(_task);
    this.form = new FormGroup({
      title: new FormControl(_task.title || '', [Validators.required]),
      description: new FormControl(_task.description || '')
    });
  }

  setTask(_task: Task) {
    return (this.task = _task);
  }
}
