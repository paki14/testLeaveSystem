import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDirectoryComponent } from './view-directory/view-directory.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { MaterialModuleModule } from '../../../../material-module.module';

const routes: Routes = [
  {
    path: 'view-directory', component: ViewDirectoryComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MaterialModuleModule,
    ReactiveFormsModule
  ],
  declarations: [ViewDirectoryComponent]
})
export class DirectoryModule { }

