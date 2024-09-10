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

    <!-- @switch (variable) {
    @case (a) {
        <div>a</div>
    }
    @case (b) {
        <div>b</div>
    }
    @default {
        <div>b</div>
    }
} -->
  
<!-- @for(item of items; track item.id) {
    <div>{{item.title}}</div>
}
} -->
  `,
})
export default class NewControlFlow {}
