import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerManagementComponent } from './trainer-management.component';

import { RouterModule, Routes } from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { TrainingHistoryService } from 'src/app/services/training-history/training-history.service';
import { FormsModule } from '@angular/forms';
import { SuggestionAndFeedbackComponent } from './suggestion-and-feedback/suggestion-and-feedback.component';
import { SuggestionService } from '../Service/suggestion.service';
import { TrainerAvailabilityComponent } from './trainer-availability/trainer-availability.component';
import { ViewAvailabilityComponent } from './trainer-availability/view-availability/view-availability.component';
import { AddAvailabilityComponent } from './trainer-availability/add-availability/add-availability.component';
import { AddSuggestionComponent } from './suggestion-and-feedback/add-suggestion/add-suggestion.component';
import { ViewOwnSuggestionComponent } from './suggestion-and-feedback/view-own-suggestion/view-own-suggestion.component';
import { ViewSuggestionComponent } from './suggestion-and-feedback/view-suggestion/view-suggestion.component';
import { AddFeedbackComponent } from './suggestion-and-feedback/add-feedback/add-feedback.component';
import { PreRequestComponent } from './pre-request/pre-request.component';
import { PreRequestFormComponent } from './pre-request/pre-request-form/pre-request-form.component';
import { ViewPreRequestComponent } from './pre-request/view-pre-request/view-pre-request.component';
import { PreRequestWiewCardComponent } from './pre-request/pre-request-wiew-card/pre-request-wiew-card.component';
import { PaymentInitiateComponent } from './payment-initiate/payment-initiate.component';
import { AddPaymentInitiateComponent } from './payment-initiate/add-payment-initiate/add-payment-initiate.component';
import { ViewPaymentInitiateComponent } from './payment-initiate/view-payment-initiate/view-payment-initiate.component';
import { ViewPaymentComponent } from './payment-initiate/view-payment/view-payment.component';
import { AddProfileTrainerInfoComponent } from './ProfileTrainer/add-profile-trainer-info/add-profile-trainer-info.component';
import { AddTechnologySkillComponent } from './ProfileTrainer/add-profile-trainer-info/add-technology-skill/add-technology-skill.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentDetailsComponent } from './appointment/appointment-details/appointment-details.component';
import { TrainingScheduleComponent } from './training-schedule/training-schedule.component';
import { TrainerInfoComponent } from './ProfileTrainer/trainer-info/trainer-info.component';



const routes: Routes = [

  // {
  //   path: 'profile',
  //   component: ProfileTrainerInfoComponent
  // },
  {
    path: 'appointment',
    component: AppointmentComponent
  },
  {
    path: 'suggestion',
    component: SuggestionAndFeedbackComponent
  },
  {

    path: 'trainer-availability',
    component: TrainerAvailabilityComponent
  },
  {
    path: 'training-initiate',
    component: PaymentInitiateComponent
  },
  {
    path: 'training-initiate',
    component: PaymentInitiateComponent,
    children:[
      {
        path: 'paymentInitiate',
        component:AddPaymentInitiateComponent 
      },
      {
        path: 'payment',
        component:ViewPaymentComponent 
      }
    ]
  },
  {
    path: 'availability',
    component: TrainerAvailabilityComponent
  },{
    path: 'pre-request',
    component: PreRequestComponent
  },
  {
    path: 'training-schedule',
    component: TrainingScheduleComponent
  }
  
  


];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModuleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TrainerManagementComponent,
   
    
    
    AddSuggestionComponent,
    ViewOwnSuggestionComponent,
    ViewSuggestionComponent,
    TrainerAvailabilityComponent,
    ViewAvailabilityComponent,
    AddAvailabilityComponent,
     AddFeedbackComponent,
    PreRequestComponent,
    PreRequestFormComponent,
    ViewPreRequestComponent,
    PreRequestWiewCardComponent,
    PaymentInitiateComponent,
    AddPaymentInitiateComponent,
    ViewPaymentInitiateComponent,
    ViewPaymentComponent,
    AddProfileTrainerInfoComponent,
    AddTechnologySkillComponent,
    AppointmentComponent,
    AppointmentDetailsComponent,
    TrainingScheduleComponent,
    TrainerInfoComponent,
  ],
  providers: [ SuggestionService]
})
export class TrainerManagementModule { }
