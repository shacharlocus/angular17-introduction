import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  numberAttribute,
} from '@angular/core';

@Component({
  standalone: true,
  // signals: true,
  styles: [
    `
      div {
        display: flex;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-signal-inputs',
  template: `
    <div>
      {{ name() }}

      <div>@if (age(); as _age) {- {{ _age }} years old}</div>
    </div>
  `,
})
export default class SignalInputsComponent {
  firstName = input.required<string>();
  lastName = input.required<string>();
  age = input(undefined, { transform: numberAttribute });

  name = computed<string>(() => {
    return `${this.firstName()} ${this.lastName()}`;
  });
}
