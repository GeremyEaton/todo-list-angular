export class Task {
  id?: number|string;
  title?: string;
  description?: string;
  completed: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
