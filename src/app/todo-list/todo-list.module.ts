import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';

import { TodoListRoutingModule } from './todo-list.routing';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, getReducers } from './store';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    MaterialModule,
    StoreModule.forRoot(REDUCER_TOKEN)
  ],
  providers: [
    {
      provide: REDUCER_TOKEN,
      useFactory: getReducers
    }
  ]
})
export class TodoListModule {}
