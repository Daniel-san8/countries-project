import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesFlagComponent } from './countries-flag.component';

describe('CountriesFlagComponent', () => {
  let component: CountriesFlagComponent;
  let fixture: ComponentFixture<CountriesFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesFlagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountriesFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
