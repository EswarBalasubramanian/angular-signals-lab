import { form, FormField } from '@angular/forms/signals';
import { TodoForm as TodoModel } from './todo.model';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-todo',
  imports: [FormField],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Todo {
  todoModel = signal<TodoModel>({ todo: ''});
  todoForm = form(this.todoModel);
  error = '';
  todos: string[] = []; // TODO: Fetch from api
  
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key !== 'Enter') return;

    this.addTodo();
  }

  addTodo() {
    if (!this.todoForm.todo().value().length) {
      // TODO: Error toast
      this.error = "Invalid input";
      setTimeout(() => {this.error = '';}, 3000);
      return;
    }

    this.todos.push(this.todoForm.todo().value());
    this.todoForm.todo().reset();
  }

  removeTodo(deleteIndex: number): void {
    this.todos = this.todos.filter((val, index) => index !== deleteIndex);
  }
}
