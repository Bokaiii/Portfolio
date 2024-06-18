import { Component, OnInit } from '@angular/core';
import { TimelineComponent } from '../timeline/timeline.component';
import { DataService } from '../services/data-service/data.service';
import { Experience } from '../../typings';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-section-experience-education',
  standalone: true,
  imports: [TimelineComponent, NgClass],
  templateUrl: './section-experience-education.component.html',
  styleUrl: './section-experience-education.component.scss'
})
export class SectionExperienceEducationComponent implements OnInit{
  
  public experiences!: Experience[];
  public education!: Experience[];

  public showExperience: boolean = true;

  constructor(private dataService: DataService) {  }

  ngOnInit(): void {
    this.experiences = this.dataService.getExperience();
    this.education = this.dataService.getEducation();
  }

  public toggle(): void {
    this.showExperience = !this.showExperience;
  }
}
