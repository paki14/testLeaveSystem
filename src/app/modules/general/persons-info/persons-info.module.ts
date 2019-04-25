import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { PersonsInfoComponent } from './persons-info.component';
import { ViewAppointmentDetailsComponent } from '../../employee/employee-management/appointment/view-appointment-details/view-appointment-details.component';



const routes: Routes = [
  {
    path: '',
    component: PersonsInfoComponent,
    // component:AppointmentModule
    children: [
      {
        path: '',
        loadChildren: '../profiles/view-profile-info/view-profile-info.module#ViewProfileInfoModule'
      },
      
      {
        path: 'appointmentView',
        component: ViewAppointmentDetailsComponent
      },
      // {
      //   path: 'traineeprofileInfo',
      //   loadChildren: '../profiles/view-profile-info/view-profile-info.module#ViewProfileInfoModule'
      // },
    ]

  },
  

]
@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PersonsInfoComponent, ViewAppointmentDetailsComponent]
})
export class PersonsInfoModule { }
