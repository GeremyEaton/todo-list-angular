import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';

const taskListRoutes: Routes = [
    {
        path: 'todo-list',
        component: ListComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(taskListRoutes)],
  exports: [RouterModule]
})
export class TodoListRoutingModule { }
