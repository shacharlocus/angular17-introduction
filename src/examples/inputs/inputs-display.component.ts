import { ChangeDetectionStrategy, Component } from '@angular/core';
import SignalInputsComponent from './signal-inputs.component';
import RegularInputsComponent from './regular-inputs.component';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SignalInputsComponent, RegularInputsComponent],
  template: `
    <div>Inputs display</div>

    <div>
      @defer {
      <app-regular-inputs firstName="Shimon" lastName="Halis" age="48" />
      <app-regular-inputs firstName="Tzion" lastName="Levy" />
      <app-signal-inputs firstName="Shimon" lastName="Halis" age="42" />
      <app-signal-inputs firstName="Tzadok" lastName="Cohen" />
      }
    </div>
  `,
})
export default class InputsDisplayComponent {}
