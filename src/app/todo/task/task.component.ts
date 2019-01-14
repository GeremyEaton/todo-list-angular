import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Task } from '../class/task';
import { TodoDataService } from '../service/todo-data.service';

@Component({
  selector: 'app-todo-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  task: Task;

  taskId: number;
  private sub: any;
  constructor(
    private route: ActivatedRoute,
    private todoDataService: TodoDataService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.taskId = +params['taskId'];
    });
    if (this.taskId) {
      this.task = this.todoDataService.getTaskById(this.taskId);
    }
  }
}
