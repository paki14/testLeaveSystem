import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntakeComponent } from './intake.component';
import {RouterModule,Routes} from '@angular/router';
import { CreateIntakeComponent } from './create-intake/create-intake.component';
import { ViewIntakeComponent } from './view-intake/view-intake.component';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { SelectedApplicantsComponent } from './selected-applicants/selected-applicants.component';
import { EditIntakeComponent } from './edit-intake/edit-intake.component';
import { RegisteredApplicantsComponent } from './registered-applicants/registered-applicants.component';
import { CreateInquireApplicantsComponent } from './create-inquire-applicants/create-inquire-applicants.component';
import { ViewInquireApplicantsComponent } from './view-inquire-applicants/view-inquire-applicants.component';
import { EditInquireApplicantsComponent } from './edit-inquire-applicants/edit-inquire-applicants.component';
import { SelectInquireApplicantComponent } from './select-inquire-applicant/select-inquire-applicant.component';
const routes:Routes=[
  {
    path:'',
    component:IntakeComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IntakeComponent, CreateIntakeComponent, ViewIntakeComponent, SelectedApplicantsComponent, EditIntakeComponent, RegisteredApplicantsComponent, CreateInquireApplicantsComponent, ViewInquireApplicantsComponent, EditInquireApplicantsComponent, SelectInquireApplicantComponent]
})
export class IntakeModule { }
