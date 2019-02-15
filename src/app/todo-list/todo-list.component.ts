import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToDo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';
import { ɵmarkDirty as markDirty } from '@angular/core';
import { TodoStore } from '../hoc/todo.store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
@TodoStore()
export class TodoListComponent implements OnInit {
  todos: ToDo[];
  private todoService: TodoService;

  ngOnInit() {
    console.log('init from component');
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
