import { Component, OnInit } from '@angular/core';
import { RequestApiService } from '../../services/request-api.service';
import { IDetailsCountries } from '../../models/detailsCountries.interface';

@Component({
  selector: 'app-countries-flag',
  standalone: true,
  imports: [],
  templateUrl: './countries-flag.component.html',
  styleUrl: './countries-flag.component.scss'
})
export class CountriesFlagComponent implements OnInit{

  listCountries: IDetailsCountries[] = []

  constructor (private _requestApi: RequestApiService) {}

  ngOnInit(): void {
    this._requestApi.getCountries().subscribe({
      next: (value: any) => {
        this.listCountries = value
        
      },
      error: (err: any) => {
        console.log(err)
      }
    });
  }
  

}
