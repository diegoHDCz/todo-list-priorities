export interface Todo {
  id: number;
  title: string;
  description: string;
  priority: string;
  assignee: string;
  deadline: Date;
  active: boolean;
}
