import {Injectable} from '@angular/core';
import {CURRICULUM_WIDGET_DATA} from './curriculum-widget/curriculum-widget.mock';

@Injectable()
export class FetchCurriculumService {

  constructor() {
    console.log('work work');
  }

  getCurriculumData(): any {
    return CURRICULUM_WIDGET_DATA;
  }
}
