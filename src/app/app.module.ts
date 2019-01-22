import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';

import { PageNotFoundModule } from '@modules/page-not-found/page-not-found.module';
import { TaskListModule } from '@modules/task-list/task-list.module';
import { CoreModule } from '@core/core.module';
import 'hammerjs';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    PageNotFoundModule,
    TaskListModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
