export class Task {
  id: number;
  title: string;
  description?: string;
  completed: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
