import {Injectable} from '@angular/core';

@Injectable()
export class RouteManagerService {

  constructor() {
  }

  openCurriculumWithChapterId(chapterId: any) {
    console.log('redirecting to chapter id: ' + chapterId);
  }

  openCurriculumWithResourceId(unitId: any, resourceId: any) {
    console.log('redirecting to resource id: ' + resourceId + ' in unit: ' + unitId);
  }
}
