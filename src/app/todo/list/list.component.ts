import { Component, OnInit } from '@angular/core';
import { Task } from '../interface/task';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  taskList: Task[] = [
    {
      id: '5c38687f8dfd210249225d88',
      index: 0,
      completed: true,
      title: 'Ann Hutchinson',
      description: `Occaecat exercitation excepteur amet ea fugiat laboris voluptate amet cupidatat. Sint aliquip fugiat
         do consequat Lorem nisi aliquip velit excepteur consequat mollit mollit proident fugiat. Amet ad amet
          commodo officia reprehenderit. Veniam minim nulla culpa nisi velit incididunt. Reprehenderit exercitation
           qui magna aute laboris. Amet nisi laborum veniam Lorem qui aliquip tempor id labore incididunt.\r\n`
    },
    {
      id: '5c38687f5cef147cb6c188a1',
      index: 1,
      completed: false,
      title: 'Juliette Molina',
      description: `Incididunt culpa amet pariatur consectetur non deserunt cillum ullamco mollit commodo mollit.
         Amet qui veniam fugiat tempor in reprehenderit culpa veniam. Esse non esse aute et aute consequat laboris cupidatat amet.\r\n`
    },
    {
      id: '5c38687ff2dd38c7b9c59b0c',
      index: 2,
      completed: false,
      title: 'Tamara Brooks',
      description: `Pariatur aute dolore sint incididunt veniam veniam elit culpa duis occaecat culpa.
         Sit quis consectetur ex Lorem ut amet cillum occaecat duis et velit dolor sunt labore.
          Aliquip pariatur eu veniam magna aute consequat nulla fugiat sit occaecat ipsum aute minim esse.
           Dolore labore velit occaecat ea cupidatat reprehenderit et reprehenderit. Culpa cupidatat dolore laborum incididunt
            nisi non qui nulla sit magna dolor sint. Aute ut eu cillum ea do ut sint dolor fugiat laboris ullamco pariatur.\r\n`
    },
    {
      id: '5c38687fa462f9559d7a7ab0',
      index: 3,
      completed: false,
      title: 'Mcpherson Flowers',
      description: `Anim cupidatat ipsum commodo mollit anim. Nostrud officia mollit cupidatat qui duis id. Sint laboris
         in ex esse eiusmod est cupidatat ex consequat esse culpa ullamco incididunt.\r\n`
    },
    {
      id: '5c38687f0ad28007877704f7',
      index: 4,
      completed: true,
      title: 'Reilly Holmes',
      description: `Dolor amet nisi mollit sit culpa qui. Laboris duis culpa in do consequat ipsum quis laborum elit quis anim.
         Ex voluptate officia voluptate consequat laboris anim laboris exercitation Lorem eu commodo nisi tempor.
          Duis tempor dolor ipsum esse magna aliqua eu irure non reprehenderit dolore deserunt. Labore aliqua ut aliqua
           et nulla occaecat elit dolore.\r\n`
    }
  ];

  taskListUncompleted: Task[];
  taskListCompleted: Task[];

  constructor() {
    this.updateList();
  }

  ngOnInit() {}


  updateList() {
    this.updateTaskListUncompleted();
    this.updateTaskListCompleted();
  }

  updateTaskListUncompleted() {
    this.taskListUncompleted = this.taskList.filter(task => !task.completed);
  }

  updateTaskListCompleted() {
    this.taskListCompleted = this.taskList.filter(task => task.completed);
  }

  toggleComplete(currentTask: any) {
    this.taskList.find(task => task.id === currentTask.value).completed =
      currentTask.selected;

      this.updateTask(currentTask.value, {completed : currentTask.selected});
  }

  updateTask(taskId: string, attribute: object) {
    const currentTask = this.taskList.filter(task => task.id === taskId);
    const attributeName: string = Object.keys(attribute)[0];
    currentTask[0][attributeName] = attribute[attributeName];

    this.updateList();
  }

}
