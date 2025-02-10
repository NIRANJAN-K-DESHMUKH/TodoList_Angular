
import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { NgFor, NgIf } from '@angular/common';
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todos',
  imports: [TodoItemComponent, NgFor, NgIf, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos: Todo[];

  constructor(){
    this.todos = []
  }

  deleteTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    console.log(todo);    
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  
  addTodo(todo: Todo){
    this.todos.push(todo);
    console.log(todo);  
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
