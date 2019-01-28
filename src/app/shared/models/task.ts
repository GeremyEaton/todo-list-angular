export class Task {
  id: string;
  title: string = '';
  description: string = '';
  completed: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);



  }
}
