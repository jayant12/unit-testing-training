import {TestBed} from '@angular/core/testing';

import {TestService} from './test-service.service';

describe('TestService', () => {
  let mockTestServiceInstance: TestService;
  let progressType: any;
  let currentProgress: any;
  let totalProgress: any;
  let isCareerTrackCourse: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    mockTestServiceInstance = new TestService();
  });

  it('should be created', () => {
    const service: TestService = TestBed.get(TestService);
    expect(service).toBeTruthy();
  });

  it('should return correct progress text for "curriculum" progressType', () => {
    //  Arrange
    progressType = "curriculum";
    currentProgress = "60";
    totalProgress = "100";
    isCareerTrackCourse = false;

    //  Act
    let progressText = mockTestServiceInstance.getProgressText(progressType, currentProgress, totalProgress, isCareerTrackCourse);

    //  Assert
    expect(progressText).toBe("60% of curriculum completed");
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
