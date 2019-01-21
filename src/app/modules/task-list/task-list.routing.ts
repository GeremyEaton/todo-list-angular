import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { TaskComponent } from './components/task/task.component';

const taskListRoutes: Routes = [
    {
        path: 'task-list/list',
        component: ListComponent
    },
    {
        path: 'task-list/task/:taskId',
        component: TaskComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(taskListRoutes)],
  exports: [RouterModule]
})
export class TaskListRoutingModule { }
