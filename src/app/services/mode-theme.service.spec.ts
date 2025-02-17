import { TestBed } from '@angular/core/testing';

import { ModeThemeService } from './mode-theme.service';

describe('ModeThemeService', () => {
  let service: ModeThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModeThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
