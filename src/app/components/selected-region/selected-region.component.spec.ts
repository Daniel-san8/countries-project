import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedRegionComponent } from './selected-region.component';

describe('SelectedRegionComponent', () => {
  let component: SelectedRegionComponent;
  let fixture: ComponentFixture<SelectedRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedRegionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectedRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
