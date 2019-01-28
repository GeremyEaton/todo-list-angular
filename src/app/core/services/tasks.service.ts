import { Injectable } from '@angular/core';
import { Task } from '@shared/models/task';
import { Subject, Observable, Subscribable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { AuthService } from '@core/auth/services/auth.service';
import { Observer } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public tasks: Task[] = [];

  tasks$: Observable<Task[]>;
  tasksSubject = new Subject<Task[]>();
  tasksCollection: AngularFirestoreCollection<Task>;

  dataBaseName: string = 'tasks';

  userId: string = '';

  constructor(private afs: AngularFirestore, private authService: AuthService) {
    this.initTasks();
    authService.auth$.subscribe(result => {
      if (result) {
        return this.initTasks();
      }
      return (this.userId = null);
    });
  }

  initTasks() {
    this.userId = this.authService.getUserId();
    this.tasksCollection = this.afs.collection<Task>(this.dataBaseName);
    this.tasks$ = this.tasksCollection.valueChanges();
    this.getTasks();
  }

  emitTasks() {
    this.tasksSubject.next(this.tasks);
  }

  getTasks() {
    let userDoc = this.afs.firestore
      .collection(this.dataBaseName)
      .where('uid', '==', this.userId);

    userDoc
      .get()
      .then(querySnapshot => {
        this.tasks = [];
        querySnapshot.forEach(doc => {
          let task = new Task(doc.data());
          task.id = doc.id;
          this.tasks.push(task);
        });
        return this.emitTasks();
      })
      .catch(error => console.error('Error getting collection: ', error));
  }

  getTask(_id: Task['id']): Task | any {
    return this.tasks.find(task => task.id === _id);
  }

  updateTaskById(_id: Task['id'], _values: Object) {
    this.updateTask(this.getTask(_id), _values);
  }

  updateTask(_task: Task, _values: Object) {
    if (!_values) {
      return console.error('UpdateTask() need values for updating !');
    }
    let task = this.tasks.find(task => task.id === _task.id);
    Object.assign(task, _values);
    this.tasksCollection
      .doc(_task.id)
      .update(_values)
      .then(() => {
        this.emitTasks();
      })
      .catch(error => console.error('Error updating document: ', error));
  }

  createTask(_titleValue: string) {
    let task = new Task();
    task.uid = this.userId;
    task.title = _titleValue;
    this.tasksCollection
      .add(Object.assign({}, task))
      .then(() => {
        this.getTasks();
        this.emitTasks();
      })
      .catch(error => console.error('Error creating document: ', error));
  }

  removeTask(_task: Task) {
    this.tasksCollection
      .doc(_task.id)
      .delete()
      .then(() => {
        this.tasks = this.tasks.filter(task => task.id !== _task.id);
        this.emitTasks();
      })
      .catch(error => console.error('Error deleting document: ', error));
  }
}
