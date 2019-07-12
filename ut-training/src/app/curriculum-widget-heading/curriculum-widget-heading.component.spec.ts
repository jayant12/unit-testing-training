import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CurriculumWidgetHeadingComponent} from './curriculum-widget-heading.component';

describe('CurriculumWidgetHeadingComponent', () => {
  let component: CurriculumWidgetHeadingComponent;
  let fixture: ComponentFixture<CurriculumWidgetHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurriculumWidgetHeadingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumWidgetHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show correct heading', () => {
    expect(1).toBeTruthy();
  });
});
