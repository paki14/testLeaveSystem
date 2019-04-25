import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminationComponent } from './termination.component';
import {RouterModule,Routes} from '@angular/router';
import { ApproveTerminationComponent } from './approve-termination/approve-termination.component';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { TraineeTerminationAcceptModalComponent } from './approve-termination/trainee-termination-accept-modal/trainee-termination-accept-modal.component';
import { TraineeTerminationRejectModalComponent } from './approve-termination/trainee-termination-reject-modal/trainee-termination-reject-modal.component';
import { ViewTerminationHistoryComponent } from './termination-history/view-termination-history/view-termination-history.component';
import { AddTerminationHistoryComponent } from './termination-history/add-termination-history/add-termination-history.component';
import { EditTerminationHistoryComponent } from './termination-history/edit-termination-history/edit-termination-history.component';
import { DeleteTerminationHistoryComponent } from './termination-history/delete-termination-history/delete-termination-history.component';
import { FlatpickrModule } from 'angularx-flatpickr';
import { TraineeRequestTerminationComponent } from './trainee-request-termination/trainee-request-termination.component';

const routes:Routes=[
  {
    path:'',
    component:TerminationComponent
  }
]
@NgModule({
  imports: [
    MaterialModuleModule,
    CommonModule,
    MaterialModuleModule,
    FlatpickrModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [TerminationComponent, 
    ViewTerminationHistoryComponent, 
    AddTerminationHistoryComponent, 
    EditTerminationHistoryComponent, 
    DeleteTerminationHistoryComponent, 
    TraineeRequestTerminationComponent,
    ApproveTerminationComponent,
    TraineeTerminationAcceptModalComponent,
    TraineeTerminationRejectModalComponent
  ]
})
export class TerminationModule { }
