import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ExperienceComponent } from './components/experience.component';
import { AboutmeComponent } from './components/aboutme.component';
import { ProjectsComponent } from './components/projects.component';
import { SocialsComponent } from './components/socials.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienceComponent,
    AboutmeComponent,
    ProjectsComponent,
    SocialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
