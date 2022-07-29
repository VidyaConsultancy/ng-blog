export class Todo {
  id: number;
  title: string;
  isCompleted: boolean;
  createdDate: Date;
  dueDate: Date;

  constructor(title: string, isComplelted: boolean = false, dueDate: Date = new Date()) {
    this.id = Math.round(Math.random() * 10000);
    this.title = title;
    this.isCompleted = isComplelted;
    this.dueDate = dueDate;
    this.createdDate = new Date();
  }
}
