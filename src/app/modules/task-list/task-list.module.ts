import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TaskListRoutingModule } from './task-list.routing';

import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';

import { MaterialModule } from '@shared/modules/material/material.module';

import { TodoDataService } from './service/todo-data.service';

@NgModule({
  declarations: [ListComponent, TaskComponent],
  imports: [
    CommonModule,
    TaskListRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    TodoDataService
  ]
})
export class TaskListModule {}