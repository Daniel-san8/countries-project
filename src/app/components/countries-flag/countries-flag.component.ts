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
  listPagination: IDetailsCountries[] = [];
  pagination = 10;


  constructor (private readonly _requestApi: RequestApiService, protected readonly _modeService: ModeThemeService) {}

  ngOnInit(): void {
    this.getCountries();
  }


  getCountries () {
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
  
  paginationCountries (list?: IDetailsCountries[]) {
   for (let i = this.listPagination.length; i < this.listCountries.length; i++) {
      if(i === this.pagination) {
        this.pagination += 10;
        break
      }
      if(this.listPagination.length >= this.listCountries.length) {
        break
      }
      if(list) {
        this.listPagination[i] = list[i];
      } else {
        this.listPagination[i] = this.listCountries[i];
      }

   }
  }

  changeRegionList (region: string) {
    if(region === 'none') return this.getCountries();
    const listRegion = this.listCountries.filter((countrie) => countrie.region === region);
    this.pagination = 10;
    this.listPagination = [];
    this.paginationCountries(listRegion);
  }

}
