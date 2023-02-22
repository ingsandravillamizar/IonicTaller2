import { TestBed } from '@angular/core/testing';

import { MiprimerserviceService } from './miprimerservice.service';

describe('MiprimerserviceService', () => {
  let service: MiprimerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiprimerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
