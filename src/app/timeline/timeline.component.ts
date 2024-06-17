import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Experience } from '../../typings';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [NgFor],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  public entries: Experience[] = [
    {
      startYear: '2023',
      endYear: 'Present',
      title: 'Java Developer at DXC Technology',
      description: 'Backend developer working on REST API development'
    },
    {
      startYear: '2022',
      endYear: '2023',
      title: 'Synchronizing data across microservices',
      description: 'Worked in collaboration with EG Digital Welfare to find a solution for synchronizing data across microservices, using the Event Streaming Platform Apache Kafka and the Saga pattern'
    }
  ];
}
