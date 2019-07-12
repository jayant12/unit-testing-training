import {Component, OnInit} from '@angular/core';
import {TestService} from './test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ut-training';
  progressText: string;

  constructor(private testService: TestService) {

  }

  ngOnInit() {
    this.progressText = this.testService.getProgressText('projects', '60', '70', false);
    console.log(this.progressText);
  }
}
