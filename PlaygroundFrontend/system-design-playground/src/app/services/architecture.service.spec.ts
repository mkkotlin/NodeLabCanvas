import { TestBed } from '@angular/core/testing';

import { ArchitectureService } from './architecture.service';

describe('ArchitectureService', () => {
  let service: ArchitectureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchitectureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
