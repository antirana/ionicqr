import { TestBed } from '@angular/core/testing';

import { ServiceclimaService } from './serviceclima.service';

describe('ServiceclimaService', () => {
  let service: ServiceclimaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceclimaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
