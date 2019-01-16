import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { TodoListRoutingModule } from './todo-list.routing';

import { ListComponent } from './list/list.component';

import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, getReducers } from './store';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
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
