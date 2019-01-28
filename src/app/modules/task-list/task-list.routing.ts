import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { TaskComponent } from './components/task/task.component';
import { AuthGuardService } from '@core/auth/services/auth-guard.service';

const taskListRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'task-list/list',
        pathMatch: 'full'
      },
      {
        path: 'task-list',
        canActivate: [AuthGuardService],
        children: [
          {
            path: 'list',
            component: ListComponent
          },
          {
            path: 'task/:taskId',
            component: TaskComponent
          },
          {
            path: '**',
            redirectTo: 'list'
          }
        ]
      },
      { path: '**', redirectTo: 'task-list' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(taskListRoutes)],
  exports: [RouterModule]
})
export class TaskListRoutingModule {}
