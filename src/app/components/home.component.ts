import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <header>
    <h1>rawlin08</h1>
    <div class="socials">
      <a href="https://github.com/rawlin08"><svg class="icon"><use href="#githubIcon"></use></svg></a>
      <a href="https://www.linkedin.com/in/alec-rawlins-556874170/"><svg class="icon"><use href="#linkedinIcon"></use></svg></a>
    </div>
  </header>
  <main>
    <app-aboutme></app-aboutme>
    <app-experience></app-experience>
    <app-projects></app-projects>
  </main>
  <footer>
    <h1>rawlin08</h1>
    <div class="socials">
      <a href="https://github.com/rawlin08"><svg class="icon"><use href="#githubIcon"></use></svg></a>
      <a href="https://www.linkedin.com/in/alec-rawlins-556874170/"><svg class="icon"><use href="#linkedinIcon"></use></svg></a>
    </div>
  </footer>
  `,
  styles: [``]
})
export class HomeComponent {
  constructor() {}
}
