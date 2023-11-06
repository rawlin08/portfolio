import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  template: `
  <div>
    <h3>HTML</h3>
    <p>4 Years Experience</p>
  </div>
  <div>
    <h3>CSS</h3>
    <p>4 Years Experience</p>
  </div>
  <div>
    <h3>JavaScript</h3>
    <p>3 Years Experience</p>
  </div>
  <div>
    <h3>Angular</h3>
    <p>1 Year Experience</p>
  </div>
  <div>
    <h3>TypeScript</h3>
    <p>1 Year Experience</p>
  </div>
  `,
  styles: [`
  /* MOBILE STYLES */
  h3 {
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -1px;
    margin: 0 0 5px 0;
  }
  p {
    text-align: center;
    color: var(--light-gray);
  }

  /* TABLET STYLES */
  @media (min-width: 768px) {
    h3 {
      text-align: left;
      font-size: 48px;
    }
    p {
      text-align: left;
      font-size: 18px;
    }
  }
  `]
})
export class ExperienceComponent {
  constructor() {}
}
