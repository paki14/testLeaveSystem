import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreAssignmentsComponent } from './score-assignments/score-assignments.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';

const routes: Routes = [
  {
   path: 'score-assignments', component: ScoreAssignmentsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ScoreAssignmentsComponent]
})
export class AssignmentsModule { }
