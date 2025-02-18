import { Component, EventEmitter, Output } from '@angular/core';
import { ModeThemeService } from '../../services/mode-theme.service';
import { FormsModule } from '@angular/forms';
import { ChangeThemeColorDirective } from '../../directives/change-theme-color.directive';

@Component({
    selector: 'app-selected-region',
    standalone: true,
    imports: [ChangeThemeColorDirective, FormsModule],
    templateUrl: './selected-region.component.html',
    styleUrl: './selected-region.component.scss'
})
export class SelectedRegionComponent {

  @Output() updateListCountrieEmitter = new EventEmitter<string>();
  selectValue = 'none';

  constructor (protected readonly _modeService: ModeThemeService) {}

  updateListCountrie () {
    this.updateListCountrieEmitter.emit(this.selectValue);
  }

  resetValueSelect () {
    this.selectValue = 'none'
  }
}
