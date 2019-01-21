import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Task } from '@shared/models/task';

@Component({
  templateUrl: './dialog-remove-task.component.html',
  styleUrls: ['./dialog-remove-task.component.scss']
})
export class DialogRemoveTaskComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogRemoveTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task
  ) {}
  ngOnInit() {}
}
