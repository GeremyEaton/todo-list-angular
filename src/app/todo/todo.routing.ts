import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';

const todoListRoutes: Routes = [
    {
        path: 'list',
        component: ListComponent
    },
    {
        path: 'list/:taskId',
        component: TaskComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(todoListRoutes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
