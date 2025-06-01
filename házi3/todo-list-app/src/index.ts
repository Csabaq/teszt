import { TodoItem } from "./models/todoItem";
import { TodoList } from "./services/todoList";

const todoList = new TodoList<string>();

todoList.addItem(new TodoItem(1, "mosás"));
todoList.addItem(new TodoItem(2, "főzés"));
todoList.addItem(new TodoItem(3, "bevásárlás"));

todoList.removeItem(1);

todoList.listItems().forEach(item => {
    console.log(`${item.id} ${item.content}`)
})