import { Component } from '@angular/core';

@Component({
  selector: 'app-socials',
  template: `
  <h1>rawlin08</h1>
  <div class="socials">
    <a href="https://github.com/rawlin08"><svg class="icon"><use href="#githubIcon"></use></svg></a>
    <a href="https://www.linkedin.com/in/alec-rawlins-556874170/"><svg class="icon"><use href="#linkedinIcon"></use></svg></a>
  </div>
  `,
  styles: [`
  /* MOBILE STYLES */
  .icon {
    width: 40px;
    height: 40px;
  }
  .socials {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    z-index: 5;
  }

  /* TABLET STYLES */
  @media (min-width: 768px) {
    h1 {
      margin: 0;
      font-size: 32px;
    }
  }
  `]
})
export class SocialsComponent {
  constructor() {}
}
