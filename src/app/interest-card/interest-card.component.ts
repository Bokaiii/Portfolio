import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { Interest } from '../../typings';

@Component({
  selector: 'app-interest-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './interest-card.component.html',
  styleUrl: './interest-card.component.scss'
})
export class InterestCardComponent {
  @Input() interest?: Interest

  faCode = faCode;
}
