export class Todo {
  id: number;
  title: string;
  isCompleted: boolean;
  createdDate: Date;
  dueDate: Date;

  constructor(id: number, title: string, isComplelted: boolean = false, dueDate: Date = new Date()) {
    this.id = id;
    this.title = title;
    this.isCompleted = isComplelted;
    this.dueDate = dueDate;
    this.createdDate = new Date();
  }
}
