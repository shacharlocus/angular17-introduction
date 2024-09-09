import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import LoadingComponent from './loading.component';
import DataComponent from './data.component';
import PlaceholderComponent from './placeholder.component';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DataComponent, LoadingComponent, PlaceholderComponent],
  template: `
    <div>
      <button (click)="load()">Load component</button>
    </div>

    @defer (when $isLoaded()) {
    <app-data />
    } @placeholder {
    <app-placeholder />
    } @loading (minimum 3s) {
    <app-loading />
    }
  `,
})
export default class NewDefferableView {
  $isLoaded = signal(false);

  load(): void {
    this.$isLoaded.update(() => true);
  }
}
