import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as Material from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatListModule,
    Material.MatButtonModule,
    Material.MatIconModule
  ],
  exports: [
    Material.MatListModule,
    Material.MatButtonModule,
    Material.MatIconModule
  ]
})
export class MaterialModule { }
