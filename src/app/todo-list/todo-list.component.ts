import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToDo } from '../models/todo.model';
import { Subscription } from 'rxjs';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {
  todoInput: string;
  todos: ToDo[];

  private subscription = new Subscription();

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.subscription.add(
      this.todoService.getTodos().subscribe(t => (this.todos = t))
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addTodo() {
    if (!this.todoInput) {
      return;
    }

    this.todoService.addTodo({
      id: Math.floor(Math.random() * 1000),
      description: this.todoInput
    });

    this.todoInput = '';
  }

  removeTodo(id: number) {
    this.todoService.removeTodo(id);
  }
}
