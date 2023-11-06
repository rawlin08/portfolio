import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  template: `
  <picture class="meImg">
    <source class="meImg" srcset="/assets/images/image-profile-tablet.jpg" media="(min-width: 768px)" />
    <source class="meImg" srcset="/assets/images/image-profile-desktop.jpg" media="(min-width: 1281px)" />
    <img class="meImg" src="/assets/images/image-profile-mobile.jpg" alt="" />
  </picture>

  <div id="greeting">
    <h2>Nice to meet you! I'm <span id="myname">Alec Rawlins</span>.</h2>
    <p>I'm a front-end developer passionate about building mobile-first, accessible web apps and sites that users will love.</p>
    <button>CONTACT ME</button>
  </div>
  `,
  styles: [`
  /* MOBILE STYLES */
  #myname {
    border-bottom: 3px solid var(--mint);
  }
  .meImg {
    width: 175px;
    height: auto;
    margin: 0 0 20px 0;
  }
  #greeting {
    text-align: center;
    padding: 0 0 60px 0;
  }
  #greeting h2 {
    margin: 0;
    font-size: 40px;
    font-weight: 700;
  }
  #greeting p {
    margin: 20px 0 24px 0;
  }

  /* TABLET STYLES */
  @media (min-width: 768px) {
    #greeting {
        text-align: left;
        padding: 0;
        
    }
    #greeting h2 {
        font-size: 60px;
        margin: 0 300px 0 0;
    }
    #greeting p {
        margin: 60px 460px 34px 0;
    }
    .meImg {
        align-self: center;
        margin: 0;
        width: 265px;
        height: auto;
        position: absolute;
        top: 0;
        right: 10px;
    }
  }

  /* DESKTOP STYLES */
  @media (min-width: 1281px) {
    .meImg {
      width: 350px;
      height: auto;
      right: 70px;
    }
    #greeting {
      padding: 30px 0 0 0;
    }
    #greeting h2 {
      font-size: 72px;
      margin: 0 460px 0 0;
    }
    #greeting p {
      margin: 60px 460px 40px 0;
    }
  }
  `]
})
export class AboutmeComponent {

}
