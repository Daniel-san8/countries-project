import { Component } from '@angular/core';
import { ChangeThemeColorDirective } from '../../directives/change-theme-color.directive';
import { ModeThemeService } from '../../services/mode-theme.service';

@Component({
  selector: 'app-selected-region',
  standalone: true,
  imports: [ChangeThemeColorDirective],
  templateUrl: './selected-region.component.html',
  styleUrl: './selected-region.component.scss'
})
export class SelectedRegionComponent {
  constructor (protected readonly _modeService: ModeThemeService) {}
}
