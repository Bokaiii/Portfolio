import { Component, Input, OnInit } from '@angular/core';
import { Experience } from '../../typings';
import { NgFor, NgIf } from '@angular/common';
import { DataPopulationService } from '../services/data-population-service/data-population.service';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  @Input() public experiences?: Experience[];
  @Input() public education?: Experience[];

  @Input() public showExperience: boolean = true;

}
