import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth.routing';

import { MaterialModule } from '@shared/modules/material/material.module';

import { MainNavComponent } from './components/main-nav/main-nav.component';
import { TasksService } from './services/tasks.service';

@NgModule({
  declarations: [MainNavComponent],
  imports: [CommonModule, MaterialModule, AuthModule, AuthRoutingModule],
  exports: [MainNavComponent],
  providers: [TasksService]
})
export class CoreModule {}
