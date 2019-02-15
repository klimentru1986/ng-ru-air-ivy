import { ɵdirectiveInject as directiveInject } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Subscription } from 'rxjs';

export function TodoStore() {
  return (clazz: any) => {
    const originalFactory = clazz.ngComponentDef.factory;
    const subscription = new Subscription();

    const init = clazz.ngComponentDef.onInit;

    clazz.ngComponentDef.onInit = () => {
      if (init) {
        init();
      }
      console.log('init from decorator');
    };

    clazz.ngComponentDef.onDestroy = () => {
      subscription.unsubscribe();
    };

    clazz.ngComponentDef.factory = () => {
      const cmp = originalFactory(clazz.ngComponentDef.type);
      const todoService = directiveInject(TodoService);

      cmp.todoService = todoService;

      subscription.add(
        todoService.getTodos().subscribe(t => {
          cmp.todos = t;
        })
      );

      return cmp;
    };
  };
}
