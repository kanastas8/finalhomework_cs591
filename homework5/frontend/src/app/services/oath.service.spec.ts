import { TestBed } from '@angular/core/testing';

import { OathService } from './oath.service';

describe('OathService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OathService = TestBed.get(OathService);
    expect(service).toBeTruthy();
  });
});
