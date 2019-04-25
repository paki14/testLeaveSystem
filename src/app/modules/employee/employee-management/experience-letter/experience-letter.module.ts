import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceLetterComponent } from './experience-letter.component';
import { ExpLetterViewHistoryComponent } from './exp-letter-view-history/exp-letter-view-history.component';
import { ExpLetterRequestHistoryComponent } from './exp-letter-request-history/exp-letter-request-history.component';
import { GenerateExperienceLetterComponent } from './generate-experience-letter/generate-experience-letter.component';
import { RequestExperienceLetterComponent } from './request-experience-letter/request-experience-letter.component';
import { ExperienceLetterTemplateComponent } from './generate-experience-letter/Model/experience-letter-template/experience-letter-template.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ExperienceLetterComponent,
    children:[
      {
        path: 'viewAllHistory',
        component: ExpLetterRequestHistoryComponent
      },
      {
        path: 'individualHistory',
        component: ExpLetterViewHistoryComponent
      },
      {
        path: 'requestLetter',
        component: GenerateExperienceLetterComponent
      },
      {
        path: 'generateLetter',
        component: RequestExperienceLetterComponent
      },
    ]

  }
];
@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    ExperienceLetterComponent,
    ExpLetterViewHistoryComponent,
    ExpLetterRequestHistoryComponent,
    GenerateExperienceLetterComponent,
    RequestExperienceLetterComponent,
    ExperienceLetterTemplateComponent]
})
export class ExperienceLetterModule { }
