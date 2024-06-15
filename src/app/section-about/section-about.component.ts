import { Component, OnInit } from '@angular/core';
import { InterestCardComponent } from '../interest-card/interest-card.component';
import { CommonModule, NgFor } from '@angular/common';
import { DataPopulationService } from '../services/data-population-service/data-population.service';
import { Interest } from '../../typings';

@Component({
  selector: 'app-section-about',
  standalone: true,
  imports: [InterestCardComponent, NgFor],
  templateUrl: './section-about.component.html',
  styleUrl: './section-about.component.scss'
})
export class SectionAboutComponent implements OnInit {
  public interests?: Interest[];

  constructor (private dataPopulationService: DataPopulationService) {  }
  
  ngOnInit(): void {
    // Import interests
    this.interests = this.dataPopulationService.getInterest();
  }
}
