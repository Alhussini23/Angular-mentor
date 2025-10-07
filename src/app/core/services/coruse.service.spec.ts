import { TestBed } from '@angular/core/testing';

import { CoruseService } from './coruse.service';

describe('CoruseService', () => {
  let service: CoruseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoruseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
