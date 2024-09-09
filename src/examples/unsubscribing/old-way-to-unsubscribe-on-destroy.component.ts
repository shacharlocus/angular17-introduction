import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject, takeUntil, tap } from 'rxjs';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <div>Old unsubscribing</div> `,
})
export default class OldUnsubscribing implements OnInit, OnDestroy {
  onDestroy$ = new Subject<void>();
  observable$ = interval(500).pipe(
    takeUntil(this.onDestroy$),
    tap(() => console.log('still subscribed', new Date().getTime()))
  );

  ngOnInit(): void {
    this.observable$.subscribe();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
