import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPaymentInitiateComponent } from './add-payment-initiate/add-payment-initiate.component';
import { ViewPaymentInitiateComponent } from './view-payment-initiate/view-payment-initiate.component';
import { ViewPaymentComponent } from './view-payment/view-payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [AddPaymentInitiateComponent,
     ViewPaymentInitiateComponent, 
     ViewPaymentComponent]
})
export class PaymentInitiateModule { }
