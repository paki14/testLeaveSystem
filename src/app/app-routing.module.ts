import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProfileInfoModule } from './modules/trainee/traineeManagement/profile/add-profile-info/add-profile-info.module';




const routes: Routes = [

  {
    path: 'appointment',
   loadChildren: './modules/employee/employee-management/appointment/appointment.module#AppointmentModule'
  },

  // general
  {
    
    path: 'employee',
   loadChildren: './modules/general/persons-info/persons-info.module#PersonsInfoModule'
  },
  {
    path: 'trainee',
   loadChildren: './modules/trainee/traineeManagement/profile/trainee-info/trainee-info.module#TraineeInfoModule'
  },
  {
    path: 'selection',
    loadChildren: './modules/trainee/traineeManagement/profile/add-profile-info/add-profile-info.module#AddProfileInfoModule'
  },
  {
path:'previleges',
loadChildren: './modules/previleges/previleges.module#PrevilegesModule'
  },
  {
    path: 'remuneration',
    loadChildren: './modules/employee/remuneration/remuneration.module#RemunerationModule'
  },
  {
    path: 'recruitment',
    loadChildren: './modules/employee/recruitment/recruitment.module#RecruitmentModule'
  },

  {
    path: 'leaveManagement',
    loadChildren: './modules/employee/leave-management/leave-management.module#LeaveManagementModule'
  },
  {
    path: 'welfare',
    loadChildren: './modules/employee/welfare-and-motivation/welfare-and-motivation.module#WelfareAndMotivationModule'
  },
  {
    path: 'promotion',
    loadChildren: './modules/employee/employee-management/promotion/promotion.module#PromotionModule'
  },
  {
    path: 'careerdevelopmentplan',
    loadChildren: './modules/general/career-dev-plan/career-dev-plan.module#CareerDevPlanModule'
  },
  {
    path: 'par',
    loadChildren: './modules/general/par/par.module#ParModule'
  },
  {
    path: 'skilldevelopmentplan',
    loadChildren: './modules/trainee/traineeManagement/skilldevelopmentplan/skilldevelopmentplan.module#SkilldevelopmentplanModule'
  },
  {
    path: 'courserecord',
    loadChildren: './modules/trainee/traineeManagement/course-record/course-record.module#CourseRecordModule'
  },
  {
    path: 'attendance',
    loadChildren: './modules/trainee/traineeManagement/attendance/attendance.module#AttendanceModule'
  },
  {
    path: 'finalassesment',
    loadChildren: './modules/trainee/traineeManagement/finalassesment/finalassesment.module#FinalassesmentModule'
  },
  {
    path: 'termination',
    loadChildren: './modules/trainee/traineeManagement/termination/termination.module#TerminationModule'
  },
  {
    path: 'notifications',
    loadChildren: './modules/trainee/notifications/notifications.module#NotificationsModule'
  },
  {
    path: 'projects',
    loadChildren: './modules/trainee/projects/projects.module#ProjectsModule'
  },
  {
    path: 'assignments',
    loadChildren: './modules/trainee/assignments/assignments.module#AssignmentsModule'
  },
  {
    path: 'intake',
    loadChildren: './modules/trainee/intake/intake.module#IntakeModule'
  },
  {
    path: 'posting',
    loadChildren: './modules/trainee/posting/posting.module#PostingModule'
  },
  {
    path: 'experienceletter',
    loadChildren: './modules/employee/employee-management/experience-letter/experience-letter.module#ExperienceLetterModule'
  },
  {
    path: 'selfservice',
    loadChildren: './modules/general/self-service/self-service.module#SelfServiceModule'
  },
  {
    path: 'schedule',
    loadChildren: './modules/trainee/schedule/schedule.module#ScheduleModule'
  },

  {
    path: 'emptermination',
    loadChildren: './modules/general/termination/termination.module#TerminationModule'
  },
  {
    path: 'trainermanagement',
    loadChildren: './modules/trainer/trainer-management/trainer-management.module#TrainerManagementModule'
  },
  {
    path: 'trainer/appointment',
    loadChildren: './modules/trainer/trainer-management/ProfileTrainer/add-profile-trainer-info/add-profile-trainer.module#AddProfileTrainerModule'
    
  },
  {
    path: 'directory',
    loadChildren: './modules/employee/employee-management/directory/directory.module#DirectoryModule'
  }

]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
