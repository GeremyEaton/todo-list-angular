import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Task } from '@models/task';
import { TodoDataService } from '../../service/todo-data.service';
import { TaskFormService } from '../../service/task-form.service';

@Component({
  selector: 'app-task-list--task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  providers: [TaskFormService]
})
export class TaskComponent implements OnInit {
  stringForm: object = {
    title: {
      placeholder: `Que voulez-vous accomplir aujourd'hui ?`
    },
    description: {
      placeholder: `Précisez ce que vous aller faire : liste, lieu, date, etc.`
    }
  };

  task: Task;
  taskId: number;
  private sub: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private todoDataService: TodoDataService,
    private taskFormService: TaskFormService
  ) {
    this.initTask();
  }

  ngOnInit() {
    this.taskFormService.initFormTask(this.task);
  }

  initTask() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.taskId = +params['taskId'];
    });

    if (!this.taskId && this.taskId !== 0) {
      return this.router.navigate(['/task-list', '/list']);
    }

    let task = this.todoDataService.getTaskById(this.taskId);
    if (!task) {
      task = this.todoDataService.initNewTask();
    }
    this.setTask(task);
  }

  setTask(_task: Task) {
    return (this.task = _task);
  }
}
