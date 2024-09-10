import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  Signal,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, Observable, startWith } from 'rxjs';
import { Todo } from './todo.models';
import { toSignal } from '@angular/core/rxjs-interop';
import { TodoService } from './todos.service';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HttpClientModule, ReactiveFormsModule],
  providers: [HttpClient, TodoService],
  template: `
    <div>Signals</div>
    <input [formControl]="searchControl" placeholder="search item" />

    @for (item of filteredTodos();track item) {
    <div>
      {{ item.title }}
    </div>
    }
  `,
})
export default class OldControlFlow {
  #todoService = inject(TodoService);
  searchControl = new FormControl();
  #valueChanges = toSignal(
    this.searchControl.valueChanges.pipe(
      startWith('') as any,
      debounceTime(250)
    ) as Observable<string>
  );
  #todos = toSignal(this.#todoService.todos);
  filteredTodos = computed<Todo[]>(() => {
    const filter = this.#valueChanges()?.toLowerCase();
    const todos = this.#todos()!;

    if (filter) {
      return todos.filter((todo) => todo.title.toLowerCase().includes(filter));
    }

    return todos;
  });

  constructor() {
    effect(() => {
      const filter = this.#valueChanges();

      if (filter?.length) {
        console.log('searched', filter);
      }
    });
  }
}
