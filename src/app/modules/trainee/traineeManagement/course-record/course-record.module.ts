import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRecordComponent } from './course-record.component';
import { MaterialModuleModule } from '../../../../material-module.module';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { TraineeCourseDetailsComponent } from './trainee-course-details/trainee-course-details.component';
import { ViewCourseDetailsComponent } from './view-course-details/view-course-details.component';
import { AddGradeComponent } from './add-grade/add-grade.component';
import { ViewGradeComponent } from './view-grade/view-grade.component';
import { EditGradeComponent } from './edit-grade/edit-grade.component';
import { TabViewComponent } from './tab-view/tab-view.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { TestComponent } from './test/test.component';
import { PrintableDocumentComponent } from './printable-document/printable-document.component';

const routes:Routes=[
  {
    path:'',
    component:CourseRecordComponent
  }
  ];

@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule.forChild(routes)
    
  ],
  declarations: [CourseRecordComponent,CourseDetailsComponent,TraineeCourseDetailsComponent,ViewCourseDetailsComponent, AddGradeComponent, ViewGradeComponent, EditGradeComponent, TabViewComponent, DeleteConfirmationComponent, TestComponent, PrintableDocumentComponent]
})
export class CourseRecordModule { }
