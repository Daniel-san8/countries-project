import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ModeThemeService } from './services/mode-theme.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChildren('containerCountries') containerCountries?: QueryList<ElementRef<HTMLDivElement>>;

  constructor (protected readonly _modeTheme: ModeThemeService) {}

}
