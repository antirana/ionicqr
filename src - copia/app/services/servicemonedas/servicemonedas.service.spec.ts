import { TestBed } from '@angular/core/testing';

import { ServicemonedasService } from './servicemonedas.service';

describe('ServicemonedasService', () => {
  let service: ServicemonedasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicemonedasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
