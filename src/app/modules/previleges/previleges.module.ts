import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrevilegesComponent } from './previleges.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: PrevilegesComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrevilegesComponent]
})
export class PrevilegesModule { }
