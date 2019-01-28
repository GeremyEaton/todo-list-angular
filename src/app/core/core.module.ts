import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth.routing';

import { MaterialModule } from '@shared/modules/material/material.module';

import { MainNavComponent } from './components/main-nav/main-nav.component';
import { TasksService } from './services/tasks.service';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [MainNavComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AuthModule,
    AuthRoutingModule
  ],
  exports: [MainNavComponent],
  providers: []
})
export class CoreModule {}
