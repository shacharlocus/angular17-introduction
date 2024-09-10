import {
  ChangeDetectionStrategy,
  Component,
  Input,
  numberAttribute,
} from '@angular/core';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-regular-inputs',
  styles: [
    `
      div {
        display: flex;
      }
    `,
  ],
  template: `
    <div>
      {{ name }}

      <div>@if (age) {- {{ age }} years old}</div>
    </div>
  `,
})
export default class RegularInputsComponent {
  @Input({ required: true }) firstName!: string;
  @Input({ required: true }) lastName!: string;
  @Input({ transform: numberAttribute }) age?: number;

  name!: string;

  ngOnInit(): void {
    this.name = `${this.firstName} ${this.lastName}`;
  }
}
