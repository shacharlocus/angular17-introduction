import { AsyncPipe, JsonPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Todo } from './todo.models';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  combineLatestWith,
  debounceTime,
  filter,
  map,
  Observable,
  startWith,
  tap,
} from 'rxjs';
import { TodoService } from './todos.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HttpClientModule, AsyncPipe, JsonPipe, ReactiveFormsModule],
  providers: [HttpClient, TodoService],
  template: `
    <div>Observables</div>

    <input [formControl]="searchControl" placeholder="search item" />

    @for (item of filteredTodos$|async;track item) {
    <div>
      {{ item.title }}
    </div>
    }
  `,
})
export default class NewControlFlow implements OnInit {
  #todoService = inject(TodoService);
  searchControl = new FormControl();
  #valueChanges$: Observable<string> = this.searchControl.valueChanges.pipe(
    startWith('') as any,
    debounceTime(250)
  );
  #todos$ = this.#todoService.todos;
  filteredTodos$ = this.#todos$.pipe(
    combineLatestWith(this.#valueChanges$),
    map(([todos, filter]: [Todo[], string]) => {
      if (filter) {
        return todos.filter((todo) =>
          todo.title.toLowerCase().includes(filter.toLowerCase())
        );
      }

      return todos;
    })
  );

  ngOnInit(): void {
    this.#valueChanges$
      .pipe(
        takeUntilDestroyed(),
        filter((filter) => !!filter?.length),
        tap((filter) => console.log('searched', filter))
      )
      .subscribe();
  }
}
