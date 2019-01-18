import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';

import { PageNotFoundModule } from '@modules/page-not-found/page-not-found.module';

/** no-ngRx version */
import { TaskListModule } from '@modules/task-list/task-list.module';

/** ngRx version */
 import { TodoListModule } from '@modules/todo-list/todo-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    PageNotFoundModule,
    TaskListModule,
    TodoListModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
