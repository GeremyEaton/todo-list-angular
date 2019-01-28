export class Task {
  id: string;
  title: string = '';
  description: string = '';
  completed: boolean = false;
  uid: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
