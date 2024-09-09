import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>New</div>
    @if (true) {
    <div>if statement</div>
    } @else {
    <div>else statement</div>
    }
  `,
})
export default class NewControlFlow {}
