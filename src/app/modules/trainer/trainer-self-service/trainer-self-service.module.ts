import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerSelfServiceComponent } from './trainer-self-service.component';
import { PaymentInitiationComponent } from './payment-initiation/payment-initiation.component';
import {RouterModule,Routes} from '@angular/router';
import { TrackPaymentRequestComponent } from './track-payment-request/track-payment-request.component';
import { TrackPaymentComponent } from './track-payment/track-payment.component';
import { AddTrackPaymentComponent } from './track-payment/add-track-payment/add-track-payment.component';

const routes:Routes=[
  {
    path:'',
    component:TrainerSelfServiceComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TrainerSelfServiceComponent, PaymentInitiationComponent,
    TrackPaymentRequestComponent, TrackPaymentComponent, AddTrackPaymentComponent]
})
export class TrainerSelfServiceModule { }
