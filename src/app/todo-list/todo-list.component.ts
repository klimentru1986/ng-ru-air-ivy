import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToDo } from '../models/todo.model';
import { Subscription } from 'rxjs';
import { TodoService } from '../services/todo.service';
import { ɵmarkDirty as markDirty } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos: ToDo[];

  private subscription = new Subscription();

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.subscription.add(
      this.todoService.getTodos().subscribe(t => {
        this.todos = t;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addTodo(todo: HTMLInputElement) {
    if (!todo.value) {
      return;
    }

    this.todoService.addTodo({
      id: Math.floor(Math.random() * 1000),
      description: todo.value
    });

    todo.value = '';
    markDirty(this);
  }

  removeTodo(id: number) {
    this.todoService.removeTodo(id);
    markDirty(this);
  }
}
