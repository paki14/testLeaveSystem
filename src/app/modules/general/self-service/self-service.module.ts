import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfServiceComponent } from './self-service.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { AddIndividualsComplainsComponent } from './add-individuals-complains/add-individuals-complains.component';
import { ViewIndividualsComplainsComponent } from './view-individuals-complains/view-individuals-complains.component';
import { ViewIndividualsComplainsHistoryComponent } from './view-individuals-complains-history/view-individuals-complains-history.component';
import { ViewAllComplainHistoryComponent } from './view-all-complain-history/view-all-complain-history.component';
import { ViewResponseComponent } from './view-response/view-response.component';
import { RejectServiceComponent } from './view-individuals-complains/modal/reject-service/reject-service.component';
import { ViewFilesComponent } from './view-individuals-complains/modal/view-files/view-files.component';
import { AcceptRequestComponent } from './view-individuals-complains/modal/accept-request/accept-request.component';
import { AddReplyComponent } from './view-individuals-complains-history/modal/add-reply/add-reply.component';
import { AddResponseComponent } from './view-response/modal/add-response/add-response.component';
import { FormsModule } from '@angular/forms';
import { SelfServiceTypeComponent } from './self-service-type/self-service-type.component';
import { EditTypeComponent } from './self-service-type/model/edit-type/edit-type.component';
import { DeletTypeComponent } from './self-service-type/model/delet-type/delet-type.component';
import { SelfServiceService } from 'src/app/services/self-service/self-service.service';

const routes:Routes=[
  {
  path:'',
  component:SelfServiceComponent,
  children:[
    {
      path: 'addIndividualComplaint',
      component: AddIndividualsComplainsComponent
    },
    {
      path: 'viewIndividualComplaint',
      component: ViewIndividualsComplainsComponent
    },
    {
      path: 'viewAllComplainHistory',
      component: ViewAllComplainHistoryComponent
    },
    {
      path: 'viewIndividualComplainHistory',
      component: ViewIndividualsComplainsHistoryComponent
    },
    {
      path: 'viewResponse',
      component: ViewResponseComponent
    },
    {
      path: 'selfServiceType',
      component: SelfServiceTypeComponent
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
  declarations: [
    SelfServiceComponent, 
    AddIndividualsComplainsComponent, 
    ViewIndividualsComplainsComponent, 
    ViewIndividualsComplainsHistoryComponent, 
    ViewAllComplainHistoryComponent,
    ViewResponseComponent,
    RejectServiceComponent,
    ViewFilesComponent,
    AcceptRequestComponent,
    AddReplyComponent  ,
    AddResponseComponent,
    EditTypeComponent,
    DeletTypeComponent,
    SelfServiceTypeComponent
  ],
  providers:[SelfServiceService]
})
export class SelfServiceModule { }
