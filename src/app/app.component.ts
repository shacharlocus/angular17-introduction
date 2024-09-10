import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular17-introduction';

  links = [
    { title: 'Old template syntax', link: 'control-flow-old' },
    { title: 'New template syntax (control flow)', link: 'control-flow-new' },
    { title: 'Old way to set loader', link: 'deferrable-views-old' },
    { title: 'Deferrable views', link: 'deferrable-views-new' },
    { title: 'Old way to unsubscribe', link: 'unsubscribing-old' },
    { title: 'New way to unsubscribe', link: 'unsubscribing-new' },
    { title: 'async - observables', link: 'observables' },
    { title: 'async - signals', link: 'signals' },
    { title: 'inputs', link: 'inputs' },
  ];
}
