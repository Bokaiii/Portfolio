import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  public scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: "smooth" });
  }
}
