import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
   declarations: [
      AppComponent,
      TodoItemComponent,
      TodoListComponent
   ],
   imports: [
      CommonModule
   ]
})
export class AppModule {}
