import { Component, OnInit } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../../typings';
import { DataService } from '../services/data-service/data.service';
import { NgFor } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-section-projects',
  standalone: true,
  imports: [ProjectCardComponent, NgFor, FontAwesomeModule],
  templateUrl: './section-projects.component.html',
  styleUrl: './section-projects.component.scss'
})
export class SectionProjectsComponent implements OnInit {
  faGitHub = faGithub;

  public projects?: Project[];

  constructor(private dataService: DataService) {  }

  ngOnInit(): void {
    this.projects = this.dataService.getProjects();
  }

}
