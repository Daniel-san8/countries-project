import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModeThemeService {

  darkTheme = true;

  toggleTheme () {
    this.darkTheme = !this.darkTheme;
  }
  
}
