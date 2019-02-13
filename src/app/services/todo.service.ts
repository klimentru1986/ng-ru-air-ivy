import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToDo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos$ = new BehaviorSubject<ToDo[]>([
    {
      id: 1,
      description: 'template compiler'
    },
    {
      id: 2,
      description: 'view engine'
    },
    {
      id: 3,
      description: 'ivy'
    }
  ]);

  constructor() {}

  getTodos(): Observable<ToDo[]> {
    return this.todos$;
  }

  addTodo(todo: ToDo): void {
    this.todos$.next([...this.todos$.value, todo]);
  }

  removeTodo(id: number): void {
    this.todos$.next([...this.todos$.value.filter(t => t.id !== id)]);
  }
}
