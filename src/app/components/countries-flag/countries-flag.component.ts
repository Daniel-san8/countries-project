import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
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
  listPagination: IDetailsCountries[] = [];
  pagination = 10;


  constructor (private readonly _requestApi: RequestApiService, protected readonly _modeService: ModeThemeService) {}

  ngOnInit(): void {
    this._requestApi.getCountries().subscribe({
      next: (value) => {
        this.listCountries = value
        this.paginationCountries();
      },
      error: (err: any) => {
        console.log(err)
      }
    });

  }
  
  paginationCountries () {
   for (let i = this.listPagination.length; i < this.listCountries.length; i++) {
      if(i === this.pagination) {
        this.pagination += 10;
        break
      }
      if(this.listPagination.length >= this.listCountries.length) {
        break
      }
      this.listPagination[i] = this.listCountries[i];

   }

  }

}
