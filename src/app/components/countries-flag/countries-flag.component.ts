import { Component, OnInit } from '@angular/core';
import { RequestApiService } from '../../services/request-api.service';
import { IDetailsCountries } from '../../models/detailsCountries.interface';
import { ChangeThemeColorDirective } from '../../directives/change-theme-color.directive';
import { ModeThemeService } from '../../services/mode-theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countries-flag',
  standalone: true,
  imports: [CommonModule, ChangeThemeColorDirective],
  templateUrl: './countries-flag.component.html',
  styleUrl: './countries-flag.component.scss'
})
export class CountriesFlagComponent implements OnInit{

  listCountries: IDetailsCountries[] = [];

  constructor (private readonly _requestApi: RequestApiService, protected readonly _modeService: ModeThemeService) {}

  ngOnInit(): void {
    this._requestApi.getCountries().subscribe({
      next: (value) => {
        this.listCountries = value
        console.log(this.listCountries)
      },
      error: (err: any) => {
        console.log(err)
      }
    });
  }
  

}
