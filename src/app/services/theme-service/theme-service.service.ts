import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService implements OnInit {

  constructor() { }
  
  public darkMode: boolean = false;
  
  ngOnInit(): void {
    this.toggleTheme();
  }

  public isDark(): boolean {
    return this.darkMode;
  }

  public setDarkMode(): void {
    this.darkMode = true;
    this.addCSSClasses();
  }

  public setLightMode(): void {
    this.darkMode = false;
    this.addCSSClasses();
  }

  public toggleTheme(): void {
    this.darkMode = !this.darkMode;
    this.addCSSClasses();
  }

  private addCSSClasses(): void {
    let rootElement = document.getElementsByTagName('html')[0];
    
    if(this.darkMode) {
      rootElement.classList.remove('lightTheme');
      rootElement.classList.add('darkTheme');
      return;
    }

      rootElement.classList.add('lightTheme');
      rootElement.classList.remove('darkTheme')
  }
}
