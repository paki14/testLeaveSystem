import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TapViewComponent } from './tap-view.component';
const routes: Routes = [
//   {
//     path: '',
//     component: TapViewComponent,
//     // component:RemunerationModule,
//     children: [
//       // {
//       //   path: 'remuneration',
//       //   // component:ViewLoanComponent
//       //   loadChildren: './modules/employee/remuneration/remuneration.module#RemunerationModule'
//       // },
      
//       // {
//       //   path: 'viewtakenloan',
//       //   loadChildren:'../Loan/taken-view-by-emp/taken-view-by-emp.module#TakenViewByEmpModule'
//       // },

//       {
//         path: 'viewallemploanbyhr',
//         loadChildren:'../Loan/taken-view-by-hr/taken-view-by-hr.module#TakenViewByHrModule'
//       }

//     ]
    
//   },
//   // {
//   //   path: 'viewLoan',
//   //     component:ViewLoanComponent
//   // }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TapViewComponent]
})
export class TabViewModule { }
