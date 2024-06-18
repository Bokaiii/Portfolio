import { Component, OnInit } from '@angular/core';
import { InterestCardComponent } from '../interest-card/interest-card.component';
import { CommonModule, NgFor } from '@angular/common';
import { DataService } from '../services/data-service/data.service';
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

  constructor (private dataService: DataService) {  }
  
  ngOnInit(): void {
    // Import interests
    this.interests = this.dataService.getInterest();
  }
}
