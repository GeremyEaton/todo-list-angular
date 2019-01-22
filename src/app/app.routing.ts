import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '@core/auth/services/auth-guard.service';

const routes: Routes = [
  {
    path: '404',
    loadChildren:
      './modules/page-not-found/page-not-found.module#PageNotFoundModule'
  },
  {
    path: 'auth',
    loadChildren: ('./core/auth/auth.module#AuthModule')
  },
  {
    path: 'task-list',
    loadChildren: './modules/task-list/task-list.module#TaskListModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth'
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
