import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TodoListRoutingModule } from './todo-list.routing';

import { MaterialModule } from '@shared/modules/material/material.module';

import { ListComponent } from './list/list.component';
import { SelectTodoComponent } from './select-todo/select-todo.component';

import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, getReducers } from '@storeConfig';
import { TodoListService } from './services/todo-list.service';

@NgModule({
  declarations: [ListComponent, SelectTodoComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    TodoListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    StoreModule.forRoot(REDUCER_TOKEN)
  ],
  providers: [
    TodoListService,
    {
      provide: REDUCER_TOKEN,
      useFactory: getReducers
    }
  ]
})
export class TodoListModule {}
