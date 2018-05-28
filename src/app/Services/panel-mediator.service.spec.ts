import { TestBed, inject } from '@angular/core/testing';

import { PanelMediatorService } from './panel-mediator.service';

describe('PanelMediatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PanelMediatorService]
    });
  });

  it('should be created', inject([PanelMediatorService], (service: PanelMediatorService) => {
    expect(service).toBeTruthy();
  }));
});
