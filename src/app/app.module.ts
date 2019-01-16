import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/** no-ngRx version */
import { TaskListModule } from './task-list/task-list.module';

/** ngRx version */
import { TodoListModule } from './todo-list/todo-list.module';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    TodoListModule,
    BrowserModule,
    TaskListModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
