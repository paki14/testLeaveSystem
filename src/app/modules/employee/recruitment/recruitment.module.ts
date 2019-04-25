import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RecruitmentComponent } from './recruitment.component';
import { InterviewHistoryComponent } from './interview-history/interview-history.component';
import { AddInterviewHistoryComponent } from './interview-history/add-interview-history/add-interview-history.component';


import { JobRoleTemplateComponent } from './job-role-template/job-role-template.component';
import { PlanVacanciesComponent } from './plan-vacancies/plan-vacancies.component';
import { ViewPlanVacanciesComponent } from './view-plan-vacancies/view-plan-vacancies.component';
import { DeleteViewPlanVacanciesComponent } from './view-plan-vacancies/modal/delete-view-plan-vacancies/delete-view-plan-vacancies.component';
import { EditViewPlanVacanciesComponent } from './view-plan-vacancies/modal/edit-view-plan-vacancies/edit-view-plan-vacancies.component';
import { ViewallViewPlanVacanciesComponent } from './view-plan-vacancies/modal/viewall-view-plan-vacancies/viewall-view-plan-vacancies.component';
import { JobRoleTemplateFormComponent } from './job-role-template/modal/job-role-template-form/job-role-template-form.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { RecordApplicantCvComponent } from './record-applicant-cv/record-applicant-cv.component';
import { ViewRecordApplicantCvComponent } from './view-record-applicant-cv/view-record-applicant-cv.component';
import { InterviewSelectionComponent } from './interview-selection/interview-selection.component';
import { EditViewRecordApplicantCvComponent } from './view-record-applicant-cv/modal/edit-view-record-applicant-cv/edit-view-record-applicant-cv.component';
import { DeleteViewRecordApplicantCvComponent } from './view-record-applicant-cv/modal/delete-view-record-applicant-cv/delete-view-record-applicant-cv.component';
import { SelectInterviewSelectionComponent } from './interview-selection/modal/select-interview-selection/select-interview-selection.component';
import { RejectInterviewSelectionComponent } from './interview-selection/modal/reject-interview-selection/reject-interview-selection.component';
import { AddInterviewPanelComponent } from './interview-history/add-interview-panel/add-interview-panel.component';
import { ViewInterviewHistoryComponent } from './interview-history/view-interview-history/view-interview-history.component';
import { ViewInterviewPanelComponent } from './interview-history/view-interview-panel/view-interview-panel.component';
import { ViewInterviewPanelFormComponent } from './interview-history/view-interview-panel/modal/view-interview-panel-form/view-interview-panel-form.component';
import { AddDistrictComponent } from './add-district/add-district.component';
import { AddHighestQualificationComponent } from './add-highest-qualification/add-highest-qualification.component';
import { AddRecruitmentTypeComponent } from './add-recruitment-type/add-recruitment-type.component';
import { ViewRecruitmentTypeComponent } from './view-recruitment-type/view-recruitment-type.component';
import { ViewDistrictComponent } from './view-district/view-district.component';
import { ViewHighestQualificationComponent } from './view-highest-qualification/view-highest-qualification.component';
import { DeleteViewDistrictComponent } from './view-district/modal/delete-view-district/delete-view-district.component';
import { EditViewDistrictComponent } from './view-district/modal/edit-view-district/edit-view-district.component';
import { EditViewHighestQualificationComponent } from './view-highest-qualification/modal/edit-view-highest-qualification/edit-view-highest-qualification.component';
import { DeleteViewHighestQualificationComponent } from './view-highest-qualification/modal/delete-view-highest-qualification/delete-view-highest-qualification.component';
import { DeleteRecruitmentTypeComponent } from './view-recruitment-type/modal/delete-recruitment-type/delete-recruitment-type.component';
import { EditRecruitmentTypeComponent } from './view-recruitment-type/modal/edit-recruitment-type/edit-recruitment-type.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [

  {
    path: '',
    component: RecruitmentComponent,
    children: [
      {
        path: 'planVecancies',
        component: PlanVacanciesComponent,


      },
      {
        path: 'JobVecanciesTemplate',
        component: JobRoleTemplateComponent,
      },
      {
        path: 'recordOfApplicantCv',
        component:  RecordApplicantCvComponent,
      },
      {
        path: 'admin',
        component:  AddRecruitmentTypeComponent,
      },
      {
        path: 'interviewSelection',
        component:  InterviewSelectionComponent,
      },
      {
        path: 'interviewHistory',
        component:  AddInterviewPanelComponent,
      }
    ]

  }
]
@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [RecruitmentComponent,
    InterviewHistoryComponent,
    AddInterviewHistoryComponent,
    JobRoleTemplateComponent,
    PlanVacanciesComponent,
    ViewPlanVacanciesComponent,
    DeleteViewPlanVacanciesComponent,
    EditViewPlanVacanciesComponent,
    ViewallViewPlanVacanciesComponent,
    JobRoleTemplateFormComponent,
    RecordApplicantCvComponent,
    ViewRecordApplicantCvComponent,
    InterviewSelectionComponent,
    EditViewRecordApplicantCvComponent,
    DeleteViewRecordApplicantCvComponent,
    SelectInterviewSelectionComponent,
    RejectInterviewSelectionComponent,
    AddInterviewPanelComponent,
    ViewInterviewHistoryComponent,

    ViewInterviewPanelComponent,
    ViewInterviewPanelFormComponent,
    AddDistrictComponent,
    AddHighestQualificationComponent,
    AddRecruitmentTypeComponent,
    ViewRecruitmentTypeComponent,
    ViewDistrictComponent,
    ViewHighestQualificationComponent,
    DeleteViewDistrictComponent,
    EditViewDistrictComponent,
    EditViewHighestQualificationComponent,
    DeleteViewHighestQualificationComponent,
    DeleteRecruitmentTypeComponent,
    EditRecruitmentTypeComponent

  ]
})
export class RecruitmentModule { }
