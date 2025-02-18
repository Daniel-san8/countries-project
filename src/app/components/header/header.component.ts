import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { ModeThemeService } from '../../services/mode-theme.service';
import { ChangeThemeColorDirective } from '../../directives/change-theme-color.directive';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [FontAwesomeModule, ChangeThemeColorDirective],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  faMoonIcon = faMoon;

  constructor (protected readonly _modeService: ModeThemeService) {}

 
}
