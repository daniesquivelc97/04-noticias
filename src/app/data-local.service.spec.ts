import { TestBed } from '@angular/core/testing';

import { DataLocalService } from './services/data-local.service';

describe('DataLocalService', () => {
  let service: DataLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
