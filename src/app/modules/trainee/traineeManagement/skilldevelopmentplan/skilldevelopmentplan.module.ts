import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkilldevelopmentComponent } from './skilldevelopment.component';

import {RouterModule,Routes} from '@angular/router';
import { ViewSkilldevelopmentplanComponent } from './view-skilldevelopmentplan/view-skilldevelopmentplan.component';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { AddSkilldevelopmentComponent } from './add-skilldevelopment/add-skilldevelopment.component';
import { EditSkilldevelopmentComponent } from './edit-skilldevelopment/edit-skilldevelopment.component';
import { DeleteSkilldevelopmentComponent } from './delete-skilldevelopment/delete-skilldevelopment.component';
import { EmployeeViewSkilldevelopmentComponent } from './employee-view-skilldevelopment/employee-view-skilldevelopment.component';

const routes:Routes=[
{
  path:'',
  component:SkilldevelopmentComponent
}
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SkilldevelopmentComponent, ViewSkilldevelopmentplanComponent, AddSkilldevelopmentComponent, EditSkilldevelopmentComponent, DeleteSkilldevelopmentComponent, EmployeeViewSkilldevelopmentComponent]
})
export class SkilldevelopmentplanModule { }
