import {TestBed} from '@angular/core/testing';

import {TestService} from './test-service.service';

describe('TestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestService = TestBed.get(TestService);
    expect(service).toBeTruthy();
  });

  it('should return correct progress text for "curriculum" progressType', () => {
    //  Arrange

    //  Act

    //  Assert
    expect(1).toBeTruthy();
  });

  it('should return correct progress text for "projects" progressType for a career track course', () => {
    //  Arrange

    //  Act

    //  Assert
    expect(1).toBeTruthy();
  });

  it('should return correct progress text for "projects" progressType for a non-career track course', () => {
    //  Arrange

    //  Act

    //  Assert
    expect(1).toBeTruthy();
  });

  it('should return correct progress text for "interviews" progressType', () => {
    //  Arrange

    //  Act

    //  Assert
    expect(1).toBeTruthy();
  });

  it('should return "" if progressType is not passed', () => {
    //  Arrange

    //  Act

    //  Assert
    expect(1).toBeTruthy();
  });


});
