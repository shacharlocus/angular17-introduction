import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <div>Loading...</div> `,
  selector: 'app-loading'
})
export default class LoadingComponent {}
