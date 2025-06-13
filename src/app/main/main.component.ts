import { Component } from '@angular/core';
import { AboveTheFoldComponent } from '../above-the-fold/above-the-fold.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillSetComponent } from '../skill-set/skill-set.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ColleaguesThoughtsComponent } from '../colleagues-thoughts/colleagues-thoughts.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { HeaderComponent } from '../shared/components/header/header.component';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, AboveTheFoldComponent, AboutMeComponent, SkillSetComponent, ProjectsComponent, ColleaguesThoughtsComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
