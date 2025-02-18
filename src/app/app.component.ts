import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { ModeThemeService } from './services/mode-theme.service';
import { CommonModule } from '@angular/common';
import { SearchHomeComponent } from "./components/search-home/search-home.component";
import { SelectedRegionComponent } from "./components/selected-region/selected-region.component";
import { CountriesFlagComponent } from "./components/countries-flag/countries-flag.component";
import { ScrollPaginationDirective } from './directives/scroll-pagination.directive';
@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, HeaderComponent, SearchHomeComponent, SelectedRegionComponent, CountriesFlagComponent, ScrollPaginationDirective],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChildren('containerCountries') containerCountries?: QueryList<ElementRef<HTMLDivElement>>;

  constructor (protected readonly _modeTheme: ModeThemeService) {}

}
