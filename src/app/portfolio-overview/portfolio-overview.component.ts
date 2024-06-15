import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { SectionHomeComponent } from '../section-home/section-home.component';

@Component({
  selector: 'app-portfolio-overview',
  standalone: true,
  imports: [NavBarComponent, SectionHomeComponent],
  templateUrl: './portfolio-overview.component.html',
  styleUrl: './portfolio-overview.component.scss'
})
export class PortfolioOverviewComponent {

}
