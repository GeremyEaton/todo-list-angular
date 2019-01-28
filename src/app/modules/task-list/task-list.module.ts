import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TaskListRoutingModule } from './task-list.routing';

import { ListComponent } from './components/list/list.component';
import { TaskComponent } from './components/task/task.component';

import { MaterialModule } from '@shared/modules/material/material.module';

import { DialogRemoveTaskComponent } from './components/dialog-remove-task/dialog-remove-task.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  declarations: [ListComponent, TaskComponent, DialogRemoveTaskComponent],
  imports: [
    CommonModule,
    AngularFirestoreModule,
    TaskListRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    DialogRemoveTaskComponent
  ]
})
export class TaskListModule {}
