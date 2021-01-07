import { TestBed } from '@angular/core/testing';

import { CriticModeService } from './critic-mode.service';

describe('CriticModeService', () => {
  let service: CriticModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriticModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
