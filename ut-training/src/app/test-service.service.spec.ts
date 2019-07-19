import {TestBed} from '@angular/core/testing';

import {TestService} from './test-service.service';

describe('TestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestService = TestBed.get(TestService);
    expect(service).toBeTruthy();
  });

  it('unit test 1', () => {
    //  Arrange

    //  Act

    //  Assert
    expect(1).toBeTruthy();
  });

});
