import { Component } from '@angular/core';
import { ModeThemeService } from './services/mode-theme.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ChangeThemeColorDirective } from './directives/change-theme-color.directive';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor (protected readonly _modeTheme: ModeThemeService) {}

}
