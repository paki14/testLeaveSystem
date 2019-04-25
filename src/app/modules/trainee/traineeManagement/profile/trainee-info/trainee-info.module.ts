import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraineeInfoComponent } from './trainee-info.component';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TraineeInfoComponent,
    // component:AppointmentModule
    children: [
      { 
        path: '',
        loadChildren: '../view-profile-info/view-profile-info.module#ViewProfileInfoModule'
      }
    ]
  },
  

]
@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TraineeInfoComponent]
})
export class TraineeInfoModule { }
