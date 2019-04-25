import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentComponent } from './appointment.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { OfferLetterComponent } from './offer-letter/offer-letter.component';
import { GenerateOfferLetterComponent } from './offer-letter/generate-offer-letter/generate-offer-letter.component';
import { RolesAndResponsibilitiesComponent } from './roles-and-responsibilities/roles-and-responsibilities.component';
import { RequestLoginCredentialComponent } from './request-login-credential/request-login-credential.component';
import { FormsModule } from '@angular/forms';
// import { ViewAppointmentDetailsComponent } from './view-appointment-details/view-appointment-details.component';

const routes: Routes = [
  {
    path: 'generateOfferLetter',
    component: GenerateOfferLetterComponent
  },
  {
    path: '',
    component: AppointmentComponent,
    children: [
      {
        path: 'appointmentDetails',
        component: AppointmentDetailsComponent
      },
      {
        path: 'appointmentInformation',
        loadChildren: 'src/app/modules/general/profiles/add-profile-info/add-profile-info.module#AddProfileInfoModule'
      },
      {
        path: 'offerLetter',
        component: OfferLetterComponent,
        children: [
          {
            path: 'generateOfferLetter',
            component: GenerateOfferLetterComponent
          }
        ]
      },
      {
        path: 'requestLoginCredential',
        component: RequestLoginCredentialComponent
      },
      {
        path: 'rolesResponsibilities',
        component: RolesAndResponsibilitiesComponent
      },
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
  declarations: [AppointmentComponent, AppointmentDetailsComponent, OfferLetterComponent, GenerateOfferLetterComponent, RolesAndResponsibilitiesComponent, RequestLoginCredentialComponent]
})
export class AppointmentModule { }
