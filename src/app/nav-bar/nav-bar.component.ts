import { Component, OnInit } from '@angular/core';
import { faFlag, faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ThemeService } from '../services/theme-service/theme-service.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {
  faMoon = faMoon
  faFlag = faFlag
  faSun = faSun;
  
  constructor(private themeService: ThemeService) {  }

  ngOnInit(): void {
    this.themeService.setDarkMode();
  }

  public isDarkMode(): boolean {
    return this.themeService.isDark();
  }

  public toggleDarkMode(): void {
    this.themeService.toggleTheme();
  }

  public scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: "smooth" });
  }

  public reloadPage(): void {
    window.location.reload();
  }
}
