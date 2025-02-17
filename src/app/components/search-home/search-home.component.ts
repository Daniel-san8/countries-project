import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ChangeThemeColorDirective } from '../../directives/change-theme-color.directive';
import { ModeThemeService } from '../../services/mode-theme.service';

@Component({
  selector: 'app-search-home',
  standalone: true,
  imports: [FontAwesomeModule, ChangeThemeColorDirective],
  templateUrl: './search-home.component.html',
  styleUrl: './search-home.component.scss',
})
export class SearchHomeComponent {
  iconGlass = faMagnifyingGlass;

  constructor (protected readonly _modeService: ModeThemeService) {}

}
