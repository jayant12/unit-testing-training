const TEST_CURRICULUM_DATA = {
  chapter_id: 1670,
  chapter_name: 'My test chapter',
  chapter_index: 2,
  unit_id: 1689,
  unit_name: 'My test unit name',
  unit_index: 6,
  resource_id: 1694,
  resource_name: 'My test resource name',
  resource_min_effort: '2 Hours',
  resource_max_effort: '5 Hours',
  resource_type: 'Project'
};

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CurriculumWidgetComponent} from './curriculum-widget.component';

import {Injectable} from '@angular/core';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-curriculum-widget-heading',
  template: `
    <div></div>`
})

export class CurriculumWidgetHeadingStubComponent {
  @Input() curriculumWidgetHeading: string;
}

import {RouteManagerService} from '../route-manager.service';
import {FetchCurriculumService} from '../fetch-curriculum.service';

// @Injectable()
// export class RouteManagerStubService {
//
//   constructor() {
//   }
// }
//
// @Injectable()
// export class FetchCurriculumStubService {
//   constructor() {
//   }
//
//   getCurriculumData(): any {
//     return TEST_CURRICULUM_DATA;
//   }
// }

describe('CurriculumWidgetComponent', () => {
  let component: CurriculumWidgetComponent;
  let fixture: ComponentFixture<CurriculumWidgetComponent>;

  let mockFetchCurriculumService = jasmine.createSpyObj('FetchCurriculumService', ['getCurriculumData']);
  let MockRouteManagerService = jasmine.createSpyObj('RouteManagerService', ['openCurriculumWithChapterId', 'openCurriculumWithResourceId']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurriculumWidgetComponent, CurriculumWidgetHeadingStubComponent],
      providers: [
        // {provide: RouteManagerService, useClass: RouteManagerStubService},
        // {provide: FetchCurriculumService, useClass: FetchCurriculumStubService},
        {provide: RouteManagerService, useValue: MockRouteManagerService},
        {provide: FetchCurriculumService, useValue: mockFetchCurriculumService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumWidgetComponent);
    component = fixture.componentInstance;

    component.curriculumWidgetData = mockFetchCurriculumService.getCurriculumData.and.returnValue(TEST_CURRICULUM_DATA);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
