import { Component, OnInit } from '@angular/core';
import { ModeThemeService } from '../../services/mode-theme.service';
import { ChangeThemeColorDirective } from '../../directives/change-theme-color.directive';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from '../../app.routes';
import { RequestApiService } from '../../services/request-api.service';
import { IDetailsCountries } from '../../models/detailsCountries.interface';

@Component({
  selector: 'app-detail-countrie',
  imports: [CommonModule, ChangeThemeColorDirective, FontAwesomeModule, RouterLink],
  templateUrl: './detail-countrie.component.html',
  styleUrl: './detail-countrie.component.scss'
})
export class DetailCountrieComponent implements OnInit{

  iconArrowLeft = faArrowLeftLong;
  listCountries: IDetailsCountries[] = [];
  countrie?: IDetailsCountries;

  constructor (protected readonly _modeService: ModeThemeService, private readonly _activatedRoute: ActivatedRoute, private readonly _requestApi: RequestApiService) {}

  ngOnInit(): void {
    this._requestApi.getCountries().subscribe({
      next: value => {
        this.listCountries = value
        const paramIdCountrie = this._activatedRoute.snapshot.paramMap.get('id-countrie');
        const countrieSelected = this.listCountries.find(countrie => countrie.name === paramIdCountrie);
        console.log(countrieSelected)
        this.countrie = countrieSelected

      },
      error: err => console.log(err)
    })
  }


}
