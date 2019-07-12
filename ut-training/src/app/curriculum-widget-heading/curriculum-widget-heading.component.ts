import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-curriculum-widget-heading',
  templateUrl: './curriculum-widget-heading.component.html',
  styleUrls: ['./curriculum-widget-heading.component.scss']
})
export class CurriculumWidgetHeadingComponent implements OnInit {
  @Input() curriculumWidgetHeading: string;

  constructor() {
  }

  ngOnInit() {
  }

}
