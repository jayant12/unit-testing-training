import { TestBed } from '@angular/core/testing';

import { FetchCurriculumService } from './fetch-curriculum.service';

describe('FetchCurriculumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchCurriculumService = TestBed.get(FetchCurriculumService);
    expect(service).toBeTruthy();
  });
});
