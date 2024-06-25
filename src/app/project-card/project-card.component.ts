import { Component, Input } from '@angular/core';
import { Project } from '../../typings';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

  @Input() project!: Project;

  public openGitHub(): void {
    console.log('Open link: ' + this.project.githubLink);
  }
}
