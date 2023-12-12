import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
  <div class="heading">
    <h2>Projects</h2>
    <a href="https://www.linkedin.com/in/alec-rawlins-556874170/" target="_blank"><button>CONTACT ME</button></a>
  </div>
  <div class="completedProjects">
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
  `,
  styles: [`
  /* MOBILE STYLES */
  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h2 {
    font-size: 40px;
    font-weight: 700;
  }
  .completedProjects {
    display: grid;
    place-content: center;
    gap: 30px;
  }
  .projectInfo > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .langs {
    display: flex;
    gap: 10px;
  }
  .langs > p {
    opacity: 0.7;
  }
  .links {
    display: flex;
  }
  .links > a {
    padding: 0 10px;
  }
  .links > a:first-child {
    border-right: 1px solid #fff
  }
  .projectImg {
    width: 100%;
    height: auto;
    margin: 0 0 10px 0;
  }

  /* TABLET STYLES */
  @media (min-width: 768px) {
    h2 {
        font-size: 72px;
    }
  }

  /* DESKTOP STYLES */
  @media (min-width: 1281px) {
    .completedProjects {
        grid-template-columns: 1fr 1fr;
    }
  }
  `]
})
export class ProjectsComponent {
  constructor() {}

  projects:any = [
    {
      img: 'assets/images/taskmanagementscreen.png',
      liveurl: 'https://rawlin08.github.io/task-management-app/',
      giturl: 'https://github.com/rawlin08/task-management-app',
      title: 'TASK MANAGEMENT APP',
      langs: ['HTML', 'CSS', 'TYPESCRIPT']
    },
    {
      img: 'assets/images/weatherScreen.png',
      liveurl: 'https://rawlin08.github.io/weather-app/',
      giturl: 'https://github.com/rawlin08/weather-app',
      title: 'WEATHER APP',
      langs: ['HTML', 'CSS', 'TYPESCRIPT', 'API']
    },
    {
      img: 'assets/images/planetFactsScreen.png',
      liveurl: 'https://rawlin08.github.io/planet-facts/',
      giturl: 'https://github.com/rawlin08/planet-facts',
      title: 'PLANET FACTS SITE',
      langs: ['HTML', 'CSS', 'TYPESCRIPT']
    },
    {
      img: 'assets/images/countriesScreen.png',
      liveurl: 'https://rawlin08.github.io/countries-display/',
      giturl: 'https://github.com/rawlin08/countries-display',
      title: 'COUNTRIES APP',
      langs: ['HTML', 'CSS', 'TYPESCRIPT', 'API']
    },
    {
      img: 'assets/images/sunnysideLandingScreen.png',
      liveurl: 'https://rawlin08.github.io/sunnyside-agency-landing/',
      giturl: 'https://github.com/rawlin08/sunnyside-agency-landing/',
      title: 'SUNNYSIDE AGENCY LANDING PAGE',
      langs: ['HTML', 'CSS', 'TYPESCRIPT']
    }
  ]
}
