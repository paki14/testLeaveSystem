import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParFilterComponent } from './parEntries/par-filter/par-filter.component';
import { ParScheduleFormComponent } from './parEntries/par-schedule-form/par-schedule-form.component';
import { ParHomeComponent } from './par-home.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { ParFilterTableComponent } from './parEntries/par-filter-table/par-filter-table.component';
import { ParTemplateComponent } from './parEntries/par-template/par-template.component';
import { RatingStarCompComponent } from './parEntries/rating-star-comp/rating-star-comp.component';
import { ParHistoryComponent } from './parViews/par-history/par-history.component';
import { TrackParComponent } from './parViews/track-par/track-par.component';
import { ParReviewOutComesComponent } from './parEntries/par-review-out-comes/par-review-out-comes.component';
import { ParConfigTableComponent } from './parEntries/par-config-table/par-config-table.component';
import { ParconfigService } from './services/parconfig.service';
import { ParAppraisorsComponent } from './parEntries/par-appraisors/par-appraisors.component';
import { ParAppraisorService } from './services/par-appraisor.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ScheduleParOneUserComponent } from './parEntries/schedule-par-one-user/schedule-par-one-user.component';
import { ParAppraiseeReportComponent } from './parEntries/par-appraisee-report/par-appraisee-report.component';
import { ScheduleParService } from './services/schedule-par.service';
import { ViewScheduleParComponent } from './parViews/view-schedule-par/view-schedule-par.component';
import { ScheduleParComponent } from './tabs/schedule-par/schedule-par.component';
import { ParConfigurationComponent } from './tabs/par-configuration/par-configuration.component';
import { ParOutComesComponent } from './parViews/par-out-comes/par-out-comes.component';
import { ParDiscussionComponent } from './parViews/par-discussion/par-discussion.component';
import { AppraiserAssesmentComponent } from './parEntries/appraiser-assesment/appraiser-assesment.component';
import { AppraiserAssesmentScoreComponent } from './parEntries/appraiser-assesment-score/appraiser-assesment-score.component';


const routes: Routes = [
  {
    path: '',
    component: ParHomeComponent,
    children: [
      {
        path: 'schedulepar',
        component: ScheduleParComponent,
        children: [
          {
            path: 'scheduleparoneuser',
            component: ScheduleParOneUserComponent
          },
          {
            path: 'viewschedulepar',
            component: ViewScheduleParComponent
          }
        ]
      },
      {
        path: 'parconfiguration',
        component: ParConfigurationComponent
      },
      {
        path: 'paroutcomes',
        component: ParOutComesComponent
      },
      {
        path: 'selfassessment',
        component: ParAppraiseeReportComponent
      },
      {
        path: 'pardiscussion',
        component: ParDiscussionComponent
      },
      {
        path: 'appraiserAssesment',
        component: AppraiserAssesmentComponent
      },
      {
        path: 'appraiserAssesment/:id',
        component: AppraiserAssesmentScoreComponent
      }

    ]
  }

];
@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ParconfigService,
    ParAppraisorService,
    ScheduleParService
  ],

  declarations: [
    ParFilterComponent,
    ParScheduleFormComponent,
    ParHomeComponent,
    ParFilterTableComponent,
    ParTemplateComponent,
    RatingStarCompComponent,
    ParHistoryComponent,
    TrackParComponent,
    ParReviewOutComesComponent,
    ParConfigTableComponent,
    ParAppraisorsComponent,
    ScheduleParOneUserComponent,
    ParAppraiseeReportComponent,
    ViewScheduleParComponent,
    ScheduleParComponent,
    ParConfigurationComponent,
    ParOutComesComponent,
    ParDiscussionComponent,
    AppraiserAssesmentComponent,
    AppraiserAssesmentScoreComponent,
  ]
})
export class ParModule { }
