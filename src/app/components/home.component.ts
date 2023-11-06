import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <header>
    <app-socials></app-socials>
  </header>
  <main>
    <app-aboutme></app-aboutme>
    <app-experience></app-experience>
    <app-projects></app-projects>
  </main>
  <footer>
    <app-socials></app-socials>
  </footer>
  `,
  styles: [`
  `]
})
export class HomeComponent {
  constructor() {}
}
