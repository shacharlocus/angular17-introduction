import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <div>Data component</div> `,
  selector: 'app-data',
})
export default class DataComponent {
}
