import { Injectable } from '@angular/core';
import { Task } from '../class/task';

@Injectable()
export class TodoDataService {
  lastId: number;

  tasks: Task[] = [
    new Task({
      id: 1,
      completed: true,
      title: 'Ann Hutchinson',
      description: `Occaecat exercitation excepteur amet ea fugiat laboris voluptate amet cupidatat. Sint aliquip fugiat
         do consequat Lorem nisi aliquip velit excepteur consequat mollit mollit proident fugiat. Amet ad amet
          commodo officia reprehenderit. Veniam minim nulla culpa nisi velit incididunt. Reprehenderit exercitation
           qui magna aute laboris. Amet nisi laborum veniam Lorem qui aliquip tempor id labore incididunt.\r\n`
    }),
    new Task({
      id: 2,
      completed: false,
      title: 'Juliette Molina',
      description: `Incididunt culpa amet pariatur consectetur non deserunt cillum ullamco mollit commodo mollit.
         Amet qui veniam fugiat tempor in reprehenderit culpa veniam. Esse non esse aute et aute consequat laboris cupidatat amet.\r\n`
    }),
    new Task({
      id: 3,
      completed: false,
      title: 'Tamara Brooks',
      description: `Pariatur aute dolore sint incididunt veniam veniam elit culpa duis occaecat culpa.
         Sit quis consectetur ex Lorem ut amet cillum occaecat duis et velit dolor sunt labore.
          Aliquip pariatur eu veniam magna aute consequat nulla fugiat sit occaecat ipsum aute minim esse.
           Dolore labore velit occaecat ea cupidatat reprehenderit et reprehenderit. Culpa cupidatat dolore laborum incididunt
            nisi non qui nulla sit magna dolor sint. Aute ut eu cillum ea do ut sint dolor fugiat laboris ullamco pariatur.\r\n`
    }),
    new Task({
      id: 4,
      completed: false,
      title: 'Mcpherson Flowers',
      description: `Anim cupidatat ipsum commodo mollit anim. Nostrud officia mollit cupidatat qui duis id. Sint laboris
         in ex esse eiusmod est cupidatat ex consequat esse culpa ullamco incididunt.\r\n`
    }),
    new Task({
      id: 5,
      completed: true,
      title: 'Reilly Holmes',
      description: `Dolor amet nisi mollit sit culpa qui. Laboris duis culpa in do consequat ipsum quis laborum elit quis anim.
         Ex voluptate officia voluptate consequat laboris anim laboris exercitation Lorem eu commodo nisi tempor.
          Duis tempor dolor ipsum esse magna aliqua eu irure non reprehenderit dolore deserunt. Labore aliqua ut aliqua
           et nulla occaecat elit dolore.\r\n`
    })
  ];

  constructor() {
    this.lastId = this.tasks.length - 1;
  }

  addNewTask(_task: Task): TodoDataService {
    if (!_task.id) {
      _task.id = this.lastId++;
    }

    this.tasks.push(_task);

    return this;
  }

  updateTaskById(_id: number, _values: Object = {}): Task {
    let task = this.getTaskById(_id);

    if (!task) {
      return null;
    }

    Object.assign(task, _values);

    return task;
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(_taskId: number): Task {
    return this.tasks.filter(task => task.id === _taskId).pop();
  }

  toggleTaskComplete(_taskId: number) {
    let task = this.getTaskById(_taskId);
    let updatedTask = this.updateTaskById(_taskId, {
      completed: !task.completed
    });

    return updatedTask;
  }
}
