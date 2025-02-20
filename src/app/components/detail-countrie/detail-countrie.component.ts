import { Component } from '@angular/core';
import { ModeThemeService } from '../../services/mode-theme.service';
import { ChangeThemeColorDirective } from '../../directives/change-theme-color.directive';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detail-countrie',
  imports: [ChangeThemeColorDirective, FontAwesomeModule, RouterLink],
  templateUrl: './detail-countrie.component.html',
  styleUrl: './detail-countrie.component.scss'
})
export class DetailCountrieComponent {

  iconArrowLeft = faArrowLeftLong

  constructor (protected readonly _modeService: ModeThemeService) {}
}
