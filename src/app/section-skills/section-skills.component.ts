import { Component, OnInit } from '@angular/core';
import { SkillCardComponent } from '../skill-card/skill-card.component';
import { DataPopulationService } from '../services/data-population-service/data-population.service';
import { SkillGroup } from '../../typings';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-section-skills',
  standalone: true,
  imports: [SkillCardComponent, NgFor, NgIf],
  templateUrl: './section-skills.component.html',
  styleUrl: './section-skills.component.scss'
})
export class SectionSkillsComponent implements OnInit {

  public frontendSkills!: SkillGroup;
  public backendSkills!: SkillGroup;
  public technicalSkills!: SkillGroup

  public activeSkillGroup?: SkillGroup;
  public showSkillGroup: boolean = false;

  constructor( private dataService: DataPopulationService ) {}

  ngOnInit(): void {
    this.frontendSkills = this.dataService.getFrontendSkills();
    this.backendSkills = this.dataService.getBackendSkills();
    this.technicalSkills = this.dataService.getTechnicalSkills();
  }

  public toggleSkillGroup(skillGroup: SkillGroup): void {
    if(skillGroup == this.activeSkillGroup) {
      this.showSkillGroup = !this.showSkillGroup;
    } else {
      this.activeSkillGroup = skillGroup;
      this.showSkillGroup = true;
    }
  }
}
