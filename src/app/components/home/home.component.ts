import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchHomeComponent } from '../search-home/search-home.component';
import { SelectedRegionComponent } from '../selected-region/selected-region.component';
import { ScrollPaginationDirective } from '../../directives/scroll-pagination.directive';
import { CountriesFlagComponent } from '../countries-flag/countries-flag.component';
import { ModeThemeService } from '../../services/mode-theme.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, SearchHomeComponent, SelectedRegionComponent, CountriesFlagComponent, ScrollPaginationDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
    constructor (protected readonly _modeTheme: ModeThemeService) {}
}
