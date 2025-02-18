import { Component, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ModeThemeService } from '../../services/mode-theme.service';
import { ChangeThemeColorDirective } from '../../directives/change-theme-color.directive';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-search-home',
    standalone: true,
    imports: [FontAwesomeModule, ChangeThemeColorDirective, FormsModule],
    templateUrl: './search-home.component.html',
    styleUrl: './search-home.component.scss'
})
export class SearchHomeComponent {
  @Output() searchEmitter = new EventEmitter<string>();
  iconGlass = faMagnifyingGlass;
  valueSearch = ''


  constructor (protected readonly _modeService: ModeThemeService) {}

}
