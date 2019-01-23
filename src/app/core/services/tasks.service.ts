import { Injectable } from '@angular/core';
import { Task } from '@shared/models/task';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[] = [];
  tasksSubject = new Subject<Task[]>();

  private dataBaseName = '/tasks';

  constructor() {
    this.getTasks();
  }

  emitTasks() {
    this.tasksSubject.next(this.tasks);
  }

  saveTasks() {
    firebase
      .database()
      .ref(this.dataBaseName)
      .set(this.tasks);

    this.emitTasks();
  }

  getTasks() {
    firebase
      .database()
      .ref(this.dataBaseName)
      .on('value', (data: firebase.database.DataSnapshot) => {
        this.tasks = data.val() ? data.val() : [];
        this.emitTasks();
      });
  }

  getTask(_id: number): Task | any {
    return new Promise((resolve, reject) => {
      firebase
        .database()
        .ref(this.dataBaseName + '/' + _id)
        .once('value')
        .then(
          (data: firebase.database.DataSnapshot) => {
            return resolve(data.val());
          },
          error => reject(error)
        );
    });
  }

  updateTaskById(_id: number, _values: Object = {}) {
    console.log('UPDATE not implemented yet');
  }

  createTask(_task: Task) {
    this.tasks.push(_task);
    this.saveTasks();
  }

  removeTask(_task: Task) {
    this.tasks = this.tasks.filter(task => task !== _task);
    this.saveTasks();
  }
}
