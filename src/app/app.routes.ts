import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'todo',
    loadComponent: () =>
      import('./todo/todo').then(m => m.Todo)
  }
];
