import { Component, OnInit } from '@angular/core';
import { Task } from '../interface/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  taskList: Task[] = [
    {
      id: 1,
      title: 'Mon 1er todo',
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit temporibus blanditiis
        quisquam natus earum dignissimos facilis impedit numquam. Minima officiis assumenda adipisci
        delectus placeat beatae voluptate expedita! Illum, ad voluptatem.`,
      completed: true
    },
    {
      id: 2,
      title: 'Mon 2eme todo',
      completed: false
    }
  ];

  constructor() {}

  ngOnInit() {}

  toggleComplete(currentTask: any) {
    this.taskList.find(task => task.id === currentTask.value).completed = currentTask.selected;
  }
}
