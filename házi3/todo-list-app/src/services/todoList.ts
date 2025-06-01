import { TodoItem } from "../models/todoItem";

export class TodoList<T> {
  private items: Map<number, TodoItem<T>> = new Map();

  addItem(item: TodoItem<T>): void {
    this.items.set(item.id, item);
    console.log(`Item added: ${item.id}`);
  }

   removeItem(id: number): void {
    this.items.delete(id);
    console.log(`Item deleted: ${id}`);
   }
   
   listItems(): TodoItem<T>[] {
        return Array.from(this.items.values());
  }
 

}
