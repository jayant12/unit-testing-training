import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor() {
  }

  getProgressText(progressType: string, currentProgress: string, totalProgress: string, isCareerTrackCourse: boolean = false): string {
    switch (progressType) {
      case 'curriculum': {
        return `${currentProgress}% of curriculum completed`;
      }

      case 'projects': {
        if (isCareerTrackCourse) {
          return `${currentProgress} of ${totalProgress} projects passed`;
        } else {
          return `${currentProgress} of ${totalProgress} projects submitted`;
        }
      }

      case 'interviews': {
        return `${currentProgress} of ${totalProgress} interviews passed`;
      }

      default: {
        return '';
      }
    }
  }
}
