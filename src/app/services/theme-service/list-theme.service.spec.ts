import { TestBed } from '@angular/core/testing';

import { ListThemeService } from './list-theme.service';

describe('ListThemeService', () => {
  let service: ListThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
