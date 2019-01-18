import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '404'
  },
  {
    path: 'todo-list',
    loadChildren: './modules/todo-list/todo-list.module#TodoListModule'
  },
  {
    path: 'task-list',
    loadChildren: './modules/task-list/task-list.module#TaskListModule'
  },
  {
    path: '404',
    loadChildren: './modules/page-not-found/page-not-found.module#PageNotFoundModule'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
