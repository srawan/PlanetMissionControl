import { TestBed, inject } from '@angular/core/testing';

import { MissionControlService } from './mission-control.service';

describe('MissionControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MissionControlService]
    });
  });

  it('should be created', inject([MissionControlService], (service: MissionControlService) => {
    expect(service).toBeTruthy();
  }));
});
