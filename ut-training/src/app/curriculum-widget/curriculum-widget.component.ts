import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RouteManagerService} from '../route-manager.service';
import {FetchCurriculumService} from '../fetch-curriculum.service';


@Component({
  selector: 'app-curriculum-widget',
  templateUrl: 'curriculum-widget.component.html',
  styleUrls: ['curriculum-widget.component.scss']
})

export class CurriculumWidgetComponent implements OnInit {
  curriculumWidgetData: any;
  unitIndex: string;
  unitName: string;
  curriculumWidgetHeading = 'Curriculum Widget';
  @Output() clickEventEmitter: EventEmitter<boolean> = new EventEmitter();

  constructor(private routeMangerService: RouteManagerService,
              private fetchCurriculumService: FetchCurriculumService) {
  }

  ngOnInit() {
    this.curriculumWidgetData = this.fetchCurriculumService.getCurriculumData();
    debugger;
    this.getChapterNameandIndex();
  }

  getChapterNameandIndex() {
    if (!this.curriculumWidgetData.unit_index) {
      this.unitIndex = this.curriculumWidgetData.chapter_index ? this.curriculumWidgetData.chapter_index.toString() : '';
    } else {
      this.unitIndex = `${this.curriculumWidgetData.chapter_index}.${this.curriculumWidgetData.unit_index}`;
    }

    if (this.curriculumWidgetData.chapter_name) {
      this.unitName = this.curriculumWidgetData.chapter_name;
    } else {
      this.unitName = this.curriculumWidgetData.unit_name;
    }

  }

  navigateToCurriculum() {
    if (this.curriculumWidgetData.unit_id) {
      this.routeMangerService.openCurriculumWithChapterId(this.curriculumWidgetData.unit_id);
    } else {
      this.routeMangerService.openCurriculumWithChapterId(this.curriculumWidgetData.chapter_id);
    }
  }

  navigateToResource() {
    if (this.curriculumWidgetData.unit_id) {
      this.routeMangerService.openCurriculumWithResourceId(this.curriculumWidgetData.unit_id, this.curriculumWidgetData.resource_id);
    } else {
      this.routeMangerService.openCurriculumWithResourceId(this.curriculumWidgetData.chapter_id, this.curriculumWidgetData.resource_id);
    }
  }
}
