import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RequestApiService } from '../../services/request-api.service';
import { IDetailsCountries } from '../../models/detailsCountries.interface';
import { ChangeThemeColorDirective } from '../../directives/change-theme-color.directive';
import { ModeThemeService } from '../../services/mode-theme.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
    selector: 'app-countries-flag',
    standalone: true,
    imports: [CommonModule, ChangeThemeColorDirective],
    templateUrl: './countries-flag.component.html',
    styleUrl: './countries-flag.component.scss'
})
export class CountriesFlagComponent implements OnInit{

  @Output() resetValueRegionEmitter = new EventEmitter<void>();
  listCountries: IDetailsCountries[] = [];
  listPagination: IDetailsCountries[] = [];
  pagination = 10;


  constructor (private readonly _requestApi: RequestApiService, protected readonly _modeService: ModeThemeService, private readonly _router: Router) {}

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
    if(region === 'none') return;
    const listRegion = this.listCountries.filter((countrie) => countrie.region === region);
    this.pagination = 10;
    this.listPagination = [];
    this.paginationCountries(listRegion);
  }

  changeSearchList (search: string) {
    if(search.trim() === '') {
      this.listPagination = [];
      this.pagination = 10;
      this.paginationCountries();
    }

    const countrie = this.listCountries.find(countrieSelect => countrieSelect.name.toLowerCase() === search.trim().toLowerCase());
    if(countrie) {
      this.listPagination = [countrie];
    }
  }

  navigationDetails (countrieName: string) {
    this._router.navigate(['countrie-detail', countrieName])
  }

}
