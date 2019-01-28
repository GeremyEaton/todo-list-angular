import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Task } from '@models/task';
import { TaskFormService } from './task-form.service';
import { TasksService } from '@core/services/tasks.service';

@Component({
  selector: 'app-task-list--task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  providers: [TaskFormService]
})
export class TaskComponent implements OnInit, OnDestroy {
  stringForm: object = {
    title: {
      placeholder: `Que voulez-vous accomplir aujourd'hui ?`
    },
    description: {
      placeholder: `Précisez ce que vous aller faire : liste, lieu, date, etc.`
    }
  };

  task: Task;
  taskId: Task['id'];
  private sub$: any;

  constructor(
    public taskFormService: TaskFormService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tasksService: TasksService
  ) {}

  ngOnInit() {
    this.sub$ = this.activatedRoute.params.subscribe(params => {
      this.taskId = params['taskId'];
    });

    if (!this.taskId) {
      return this.router.navigate(['/task-list', '/list']);
    }

    let task = this.task = this.tasksService.getTask(this.taskId);

    this.taskFormService.initFormTask(task);
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

}
