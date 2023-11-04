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
    <div id="aboutme">
      <img src="" alt="">
      <div id="greeting">
        <h2>Nice to meet you! I'm <span id="myname">Alec Rawlins</span>.</h2>
        <p>I'm a front-end developer passionate about building mobile-first, accessible web apps and sites that users will love.</p>
        <button>CONTACT ME</button>
      </div>
    </div>
    <div id="experiences">
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
    </div>
    <div id="projects">
      <div>
        <h2>Projects</h2>
        <button>CONTACT ME</button>
      </div>
      <div id="completedProjects">
  
      </div>
    </div>
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
