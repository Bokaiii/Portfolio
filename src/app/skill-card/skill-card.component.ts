import { Component, Input } from '@angular/core';
import { SkillGroup } from '../../typings';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss'
})
export class SkillCardComponent {
  @Input() public skillGroup?: SkillGroup;
}
