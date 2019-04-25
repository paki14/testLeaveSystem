import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerDevPlanComponent } from './career-dev-plan.component';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { RouterModule, Routes } from '@angular/router';
import { ViewCareerDevelopmentPlanComponent } from './view-career-development-plan/view-career-development-plan.component';
import { ManageCareerDevelopmentPlanComponent } from './manage-career-development-plan/manage-career-development-plan.component';
import { CareerDevelopmentPlanFormComponent } from './modal/career-development-plan-form/career-development-plan-form.component';
import { FormsModule } from '@angular/forms';
import { EmployeeViewHRPlansComponent } from './employee-view-hr-plans/employee-view-hr-plans.component';
import { PersonelCareerDevPlansComponent } from './personel-career-dev-plans/personel-career-dev-plans.component';


const routes:Routes=[
  {
    path:'',
  component:CareerDevPlanComponent,
  children:[
    {
      path: 'empDetails',
      component: ViewCareerDevelopmentPlanComponent
    },
    {
      path: 'manageCDP',
      component: ManageCareerDevelopmentPlanComponent
    },
    {
      path: 'empViewHRPlans',
      component: EmployeeViewHRPlansComponent
    },

    {
      path: 'personalCDP',
      component: PersonelCareerDevPlansComponent
    },
  ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModuleModule,
    RouterModule.forChild(routes),
  ],
  declarations: [CareerDevPlanComponent, ViewCareerDevelopmentPlanComponent, ManageCareerDevelopmentPlanComponent, CareerDevelopmentPlanFormComponent, EmployeeViewHRPlansComponent, PersonelCareerDevPlansComponent]
})
export class CareerDevPlanModule { }
