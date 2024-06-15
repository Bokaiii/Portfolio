import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { SectionHomeComponent } from '../section-home/section-home.component';
import { SectionAboutComponent } from '../section-about/section-about.component';
import { SectionSkillsComponent } from '../section-skills/section-skills.component';

@Component({
  selector: 'app-portfolio-overview',
  standalone: true,
  imports: [NavBarComponent, SectionHomeComponent, SectionAboutComponent, SectionSkillsComponent],
  templateUrl: './portfolio-overview.component.html',
  styleUrl: './portfolio-overview.component.scss'
})
export class PortfolioOverviewComponent {

}
