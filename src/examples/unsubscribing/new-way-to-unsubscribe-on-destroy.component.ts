import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval, tap } from 'rxjs';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <div>New unsubscribe on destroy</div> `,
})
export default class NewUnsubscribing {
  observable$ = interval(500).pipe(
    takeUntilDestroyed(),
    tap(() => {
      console.log('still subscribed', new Date().getTime());
    })
  );

  constructor() {
    this.observable$.subscribe();
  }
}
