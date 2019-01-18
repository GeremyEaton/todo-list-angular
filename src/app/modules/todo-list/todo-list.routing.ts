import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { SelectTodoComponent } from './select-todo/select-todo.component';

const todoListRoutes: Routes = [
    {
        path: 'todo-list/list',
        component: ListComponent
    },
    {
        path: 'todo-list/select-todo',
        component: SelectTodoComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(todoListRoutes)],
  exports: [RouterModule]
})
export class TodoListRoutingModule { }
