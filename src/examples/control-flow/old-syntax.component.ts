import { CommonModule, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  //   imports: [CommonModule],
  imports: [NgIf],
  template: `
    <div>Old</div>
    <div *ngIf="true; else elseStatement">if statement</div>

    <ng-template #elseStatement> else statement </ng-template>
  `,
})
export default class OldControlFlow {}
