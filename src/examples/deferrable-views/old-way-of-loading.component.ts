import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import LoadingComponent from './loading.component';
import DataComponent from './data.component';
import { BehaviorSubject } from 'rxjs';
import PlaceholderComponent from './placeholder.component';

@Component({
  standalone: true,
  imports: [AsyncPipe, DataComponent, LoadingComponent, PlaceholderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <button (click)="load()">Load component</button>
    </div>

    @switch (state$ | async) { 
      @case (State.Placeholder) {
      <app-placeholder/>
      } 
        @case (State.Loading) {
        <app-loading/>
      } 

      @case (State.Loaded) {
        <app-data/>
      }
  }
  `,
})
export default class OldLoadingComponent {
  state$ = new BehaviorSubject(State.Placeholder);
  State = State;

  load(): void {
    this.state$.next(State.Loading);

    setTimeout(() => {
      this.state$.next(State.Loaded);
    }, 3000);
  }
}

enum State {
  Placeholder,
  Loading,
  Loaded,
}
