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
      <img class="meImg" src="" alt="">
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
        <div *ngFor="let project of projects">
          <a [href]="project.liveurl" target="_blank">
            <img class="projectImg" [src]="project.img" alt="">
          </a>
          <div class="projectInfo">
            <div>
              <h3>{{ project.title }}</h3>
              <div class="links">
                <a [href]="project.liveurl" target="_blank">Live</a>
                <a [href]="project.giturl" target="_blank">Github</a>
              </div>
            </div>
            <div class="langs">
              <p *ngFor="let lang of project.langs">{{ lang }}</p>
            </div>
          </div>
        </div>
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

  projects:any = [
    {
      img: 'assets/images/weatherScreen.png',
      liveurl: 'https://rawlin08.github.io/weather-app/',
      giturl: 'https://github.com/rawlin08/weather-app',
      title: 'WEATHER APP',
      langs: ['HTML', 'CSS', 'TYPESCRIPT', 'API']
    },
    {
      img: 'assets/images/todoScreen.png',
      liveurl: 'https://rawlin08.github.io/todo-app/',
      giturl: 'https://github.com/rawlin08/todo-app',
      title: 'TODO APP',
      langs: ['HTML', 'CSS', 'TYPESCRIPT']
    },
    {
      img: 'assets/images/countriesScreen.png',
      liveurl: 'https://rawlin08.github.io/countries-display/',
      giturl: 'https://github.com/rawlin08/countries-display',
      title: 'COUNTRIES APP',
      langs: ['HTML', 'CSS', 'TYPESCRIPT', 'API']
    },
  ]
}
