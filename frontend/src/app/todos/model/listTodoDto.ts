import { Todo } from "./todo";

export interface ListTodoDTO {
  content: Todo[],
  size: number,
  totalElements: number
}
