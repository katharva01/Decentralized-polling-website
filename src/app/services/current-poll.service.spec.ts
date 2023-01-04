import { TestBed } from '@angular/core/testing';

import { CurrentPollService } from './current-poll.service';

describe('CurrentPollService', () => {
  let service: CurrentPollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentPollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
