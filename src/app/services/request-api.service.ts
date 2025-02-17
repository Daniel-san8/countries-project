import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDetailsCountries } from '../models/detailsCountries.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestApiService {

 

  constructor (private readonly _httpService: HttpClient) {}

  getCountries (): Observable<IDetailsCountries[]> {
      return this._httpService.get<IDetailsCountries[]>("http://localhost:4200/assets/data.json")
  }
}
