import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-view-plan-vacancies',
  templateUrl: './edit-view-plan-vacancies.component.html',
  styleUrls: ['./edit-view-plan-vacancies.component.css']
})
export class EditViewPlanVacanciesComponent implements OnInit {
  editPlanVacancies: FormGroup;

  constructor() {
    this.editPlanVacancies = new FormGroup({
      'editJobTitle':new FormControl,
      'editRefNum':new FormControl,
      'editHirOfficer':new FormControl,
      'editHirDep':new FormControl,
      'editNumVacancy':new FormControl,
      'editTypeRecuitment':new FormControl,
      'editSalaryScal':new FormControl,
      'editScheduleDate':new FormControl,
      'editOpenDate':new FormControl,
      'editEndDate':new FormControl,
      'editKeyReq':new FormControl
      })
  }


  ngOnInit() {
  }

}
