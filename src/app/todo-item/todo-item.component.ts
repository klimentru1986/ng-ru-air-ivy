import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: ToDo;
  @Output() removeTodo = new EventEmitter();
}
