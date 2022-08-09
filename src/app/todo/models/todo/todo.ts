export class Todo {
  id: number;
  title: string;
  isCompleted: boolean;
  createdDate: Date;
  dueDate: Date;

  constructor(
    id: number,
    title: string,
    isCompleted: boolean = false,
    dueDate: Date = new Date()
  ) {
    this.id = id;
    this.title = title;
    this.isCompleted = isCompleted;
    this.dueDate = dueDate;
    this.createdDate = new Date();
  }
}
