import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo.routing';

import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';

import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [ListComponent, TaskComponent],
  imports: [CommonModule, TodoRoutingModule, MaterialModule]
})
export class TodoModule {}
