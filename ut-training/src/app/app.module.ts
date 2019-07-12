import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TestService} from './test-service.service';
import {CurriculumWidgetComponent} from './curriculum-widget/curriculum-widget.component';
import {RouteManagerService} from './route-manager.service';
import { CurriculumWidgetHeadingComponent } from './curriculum-widget-heading/curriculum-widget-heading.component';

@NgModule({
  declarations: [
    AppComponent,
    CurriculumWidgetComponent,
    CurriculumWidgetHeadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TestService, RouteManagerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
