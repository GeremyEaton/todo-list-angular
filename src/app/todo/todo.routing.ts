import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';

const todoListRoutes: Routes = [
    {
        path: 'list',
        component: ListComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(todoListRoutes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
