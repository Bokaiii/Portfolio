import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { SectionHomeComponent } from '../section-home/section-home.component';
import { SectionAboutComponent } from '../section-about/section-about.component';
import { SectionSkillsComponent } from '../section-skills/section-skills.component';
import { FooterComponent } from '../footer/footer.component';
import { SectionExperienceEducationComponent } from '../section-experience-education/section-experience-education.component';
import { ThemeService } from '../services/theme-service/theme-service.service';

@Component({
  selector: 'app-portfolio-overview',
  standalone: true,
  imports: [
    NavBarComponent,
    SectionHomeComponent,
    SectionAboutComponent,
    SectionSkillsComponent,
    FooterComponent,
    SectionExperienceEducationComponent],
  templateUrl: './portfolio-overview.component.html',
  styleUrl: './portfolio-overview.component.scss'
})
export class PortfolioOverviewComponent {

}
