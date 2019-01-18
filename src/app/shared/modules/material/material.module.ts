import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as Material from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    Material.MatListModule,
    Material.MatButtonModule,
    Material.MatIconModule,
    Material.MatFormFieldModule,
    Material.MatGridListModule,
    Material.MatInputModule,
    Material.MatSnackBarModule,
    Material.MatCheckboxModule,
    Material.MatTooltipModule
  ],
  exports: [
    Material.MatListModule,
    Material.MatButtonModule,
    Material.MatIconModule,
    Material.MatFormFieldModule,
    Material.MatGridListModule,
    Material.MatInputModule,
    Material.MatSnackBarModule,
    Material.MatCheckboxModule,
    Material.MatTooltipModule
  ]
})
export class MaterialModule {}
