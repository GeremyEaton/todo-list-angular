import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';

const taskListRoutes: Routes = [
    {
        path: 'task-list',
        component: ListComponent
    },
    {
        path: 'task-list/:taskId',
        component: TaskComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(taskListRoutes)],
  exports: [RouterModule]
})
export class TaskListRoutingModule { }
