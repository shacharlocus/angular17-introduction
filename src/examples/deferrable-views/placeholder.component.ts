import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <div>Placeholder</div> `,
  selector: 'app-placeholder',
})
export default class PlaceholderComponent {}
