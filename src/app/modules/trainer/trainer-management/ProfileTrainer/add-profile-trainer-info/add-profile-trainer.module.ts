import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProfileTrainerInfoComponent } from './add-profile-trainer-info.component';
import { AddGeneralInformationComponent } from './add-general-information/add-general-information.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AddTechnologySkillComponent } from './add-technology-skill/add-technology-skill.component';
import { AddRecordOfEmploymentComponent } from './add-record-of-employment/add-record-of-employment.component';
const routes: Routes = [
  {
    path: '', component: AddProfileTrainerInfoComponent,
    children: [
      { path: 'generalInformation', component:AddGeneralInformationComponent},
      { path: 'technologySkill', component:AddTechnologySkillComponent},
      { path: 'recordOfEmployment', component:AddRecordOfEmploymentComponent}
    ]
  }]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule
  ],
  declarations: [AddProfileTrainerInfoComponent,
    AddGeneralInformationComponent,
    AddTechnologySkillComponent,
    AddRecordOfEmploymentComponent
  ]
})
export class AddProfileTrainerModule { }
