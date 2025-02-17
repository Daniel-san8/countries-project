import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { ModeThemeService } from './services/mode-theme.service';
import { CommonModule } from '@angular/common';
import { SearchHomeComponent } from "./components/search-home/search-home.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SearchHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor (protected readonly _modeTheme: ModeThemeService) {}

}
