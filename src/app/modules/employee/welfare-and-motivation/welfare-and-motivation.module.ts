import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelfareAndMotivationComponent } from './welfare-and-motivation.component';

import { GeneralWelfareComponent } from './general-welfare/general-welfare.component';
import { IndivualWelfareComponent } from './indivual-welfare/indivual-welfare.component';

import { WelfareUsageHistoryComponent } from './welfare-usage-history/welfare-usage-history.component';
import { ViewWelfareEventComponent } from './view-welfare-event/view-welfare-event.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { AddGeneralWelfareComponent } from './general-welfare/modal/add-general-welfare/add-general-welfare.component';
import { EditGeneralWelfareComponent } from './general-welfare/modal/edit-general-welfare/edit-general-welfare.component';
import { EditWelfareEventComponent } from './view-welfare-event/modal/edit-welfare-event/edit-welfare-event.component';
import { EditWelfareUsageHistoryComponent } from './welfare-usage-history/modal/edit-welfare-usage-history/edit-welfare-usage-history.component';
import { AllowanceFormComponent } from './indivual-welfare/Modal/allowance-form/allowance-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateWelfareEventComponent } from './view-welfare-event/modal/create-welfare-event/create-welfare-event.component';
import { WelfareEventService } from './Service/welfare-event.service';
import { EditAllowanceFormComponent } from './indivual-welfare/Modal/edit-allowance-form/edit-allowance-form.component';
import { GeneralWelfareEmployeeViewComponent } from './general-welfare-employee-view/general-welfare-employee-view.component';
import { IndividualWelfareEmployeeViewComponent } from './individual-welfare-employee-view/individual-welfare-employee-view.component';
import { WelfareEventEmpComponent } from './welfare-event-emp/welfare-event-emp.component';

const routes:Routes=[
  {
    path:'',
   component:WelfareAndMotivationComponent,

   children:[
    {
      path: 'individualWelfareUser',
      component: IndividualWelfareEmployeeViewComponent
    },

    {
      path: 'individualWelfare',
      component: IndivualWelfareComponent
    },

    {
      path: 'generalWelfareUser',
      component: GeneralWelfareEmployeeViewComponent
    },

    {
      path: 'generalWelfare',
      component: GeneralWelfareComponent
    },
    {
      path: 'welfareEvent',
      component: ViewWelfareEventComponent
    },

    {
      path: 'welfareEventUser',
      component: WelfareEventEmpComponent
    },
  ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WelfareAndMotivationComponent, 
    
    GeneralWelfareComponent,
    IndivualWelfareComponent,
    WelfareUsageHistoryComponent,
    ViewWelfareEventComponent,
    AddGeneralWelfareComponent,
    EditGeneralWelfareComponent,
    CreateWelfareEventComponent,
    EditWelfareEventComponent,
    EditWelfareUsageHistoryComponent,
    AllowanceFormComponent,
    EditAllowanceFormComponent,
    GeneralWelfareEmployeeViewComponent,
    IndividualWelfareEmployeeViewComponent,
    WelfareEventEmpComponent,
  ],
  providers:[
    WelfareEventService
  ],
})
export class WelfareAndMotivationModule { }
