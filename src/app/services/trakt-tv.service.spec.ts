import { TestBed, inject } from '@angular/core/testing';

import { TraktTvService } from './trakt-tv.service';

describe('TraktTvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TraktTvService]
    });
  });

  it('should be created', inject([TraktTvService], (service: TraktTvService) => {
    expect(service).toBeTruthy();
  }));
});
