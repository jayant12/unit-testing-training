import {Injectable} from '@angular/core';
import {CURRICULUM_WIDGET_DATA} from './curriculum-widget/curriculum-widget.mock';

@Injectable({
  providedIn: 'root'
})
export class FetchCurriculumService {

  constructor() {
  }

  getCurriculumData(): any {
    return CURRICULUM_WIDGET_DATA;
  }
}
