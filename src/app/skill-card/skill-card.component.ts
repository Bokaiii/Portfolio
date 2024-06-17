import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SkillGroup } from '../../typings';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss'
})
export class SkillCardComponent {
  @Input() active: boolean = false;
  @Input() public skillGroup?: SkillGroup;
  @Output() public toggleSkillGroup = new EventEmitter<SkillGroup>();

  public toggle(): void {
    this.toggleSkillGroup.emit(this.skillGroup);
  }
}
