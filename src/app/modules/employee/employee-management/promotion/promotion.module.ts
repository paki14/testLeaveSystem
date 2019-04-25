import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionComponent } from './promotion.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { PromotionEligibilityComponent } from './promotion-eligibility/promotion-eligibility.component';
import { PromotionEligibilityCreditCheckComponent } from './promotion-eligibility/promotion-eligibility-credit-check/promotion-eligibility-credit-check.component';
import { PromotionHistoryComponent } from './promotion-history/promotion-history.component';
import { EduQualListComponent } from './promotion-eligibility/promotion-eligibility-credit-check/modal/edu-qual-list/edu-qual-list.component';
import { ParHistListComponent } from './promotion-eligibility/promotion-eligibility-credit-check/modal/par-hist-list/par-hist-list.component';
import { LeaveHistListComponent } from './promotion-eligibility/promotion-eligibility-credit-check/modal/leave-hist-list/leave-hist-list.component';
import { PromotionDeniedHistoryComponent } from './promotion-denied-history/promotion-denied-history.component';
import { EditPromotionHistoryComponent } from './promotion-history/modal/edit-promotion-history/edit-promotion-history.component';
import { EditPromotionDeniedHistoryComponent } from './promotion-denied-history/modal/edit-promotion-denied-history/edit-promotion-denied-history.component';
import { AddPromotionComponent } from './promotion-eligibility/promotion-eligibility-credit-check/modal/add-promotion/add-promotion.component';
import { AddDeniedPromotionComponent } from './promotion-eligibility/promotion-eligibility-credit-check/modal/add-denied-promotion/add-denied-promotion.component';
import { RequestPromotionComponent } from './request-promotion/request-promotion.component';
import { FormsModule } from '@angular/forms';
import { EmpViewComponent } from './request-promotion/emp-view/emp-view.component';
import { EmpViewRequestHistoryComponent } from './promotion-eligibility/emp-view-request-history/emp-view-request-history.component';
import { EmpViewPromotionHistoryComponent } from './promotion-history/emp-view-promotion-history/emp-view-promotion-history.component';
import { EmpViewDeniedHistoryComponent } from './promotion-denied-history/emp-view-denied-history/emp-view-denied-history.component';

const routes:Routes=[
  {
    path:'',
   component:PromotionComponent,
   children:[
    {
      path: 'RequestPromotionHr',
      component: RequestPromotionComponent
    },
    {
      path: 'RequestHistoryHr',
      component: PromotionEligibilityComponent
    },
    {
      path: 'PromotionHistoryHr',
      component: PromotionHistoryComponent
    },
    {
      path: 'DeniedHistoryHr',
      component: PromotionDeniedHistoryComponent
    },
    {
      path: 'RequestPromotionEmp',
      component: EmpViewComponent
    },
    {
      path: 'RequestHistoryEmp',
      component: EmpViewRequestHistoryComponent
    },
    {
      path: 'PromotionHistoryEmp',
      component: EmpViewPromotionHistoryComponent
    },
    {
      path: 'DeniedHistoryEmp',
      component: EmpViewDeniedHistoryComponent
    },
  ]

  }
]
@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PromotionComponent, PromotionEligibilityComponent,  PromotionEligibilityCreditCheckComponent,  PromotionHistoryComponent, EduQualListComponent, ParHistListComponent, LeaveHistListComponent, PromotionDeniedHistoryComponent, EditPromotionHistoryComponent, EditPromotionDeniedHistoryComponent, AddPromotionComponent, AddDeniedPromotionComponent, RequestPromotionComponent, EmpViewComponent, EmpViewRequestHistoryComponent, EmpViewPromotionHistoryComponent, EmpViewDeniedHistoryComponent]
})
export class PromotionModule { }
