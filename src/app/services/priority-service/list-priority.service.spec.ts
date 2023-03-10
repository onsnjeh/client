import { TestBed } from '@angular/core/testing';

import { ListPriorityService } from './list-priority.service';

describe('ListPriorityService', () => {
  let service: ListPriorityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPriorityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
