import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewRecordOfEmploymentService } from '../../view-profile-info/view-record-of-employment/view-record-of-employment.service';
import { ViewRecordOfEmployment } from '../../view-profile-info/view-record-of-employment/view-record-of-employment.model';
import { ProfileInfoService } from '../../view-profile-info/profile-table/profile-info.service';
import { Profile } from '../../view-profile-info/profile-table/profile.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-record-of-employment',
  templateUrl: './add-record-of-employment.component.html',
  styleUrls: ['./add-record-of-employment.component.css']
})
export class RecordOfEmploymentComponent implements OnInit {
  recordObj: ViewRecordOfEmployment = new ViewRecordOfEmployment()
  user: Profile[];
  constructor(private router: Router,
    private recordOfEmployeeService: ViewRecordOfEmploymentService,
    private userService: ProfileInfoService
  ) { }
  addUserForm = new FormGroup({
    user: new FormControl('', Validators.compose([
      Validators.required,
      // Validators.minLength(3),
      // Validators.pattern('^[a-zA-Z]*$')
    ])),
    workName: new FormControl('', Validators.compose([
      Validators.required,
      // Validators.minLength(3),
      // Validators.pattern('^[a-zA-Z]*$')
    ])),
    periodYearFrom: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
      Validators.pattern('^[0-9]*$')
    ])),
    periodYearTo: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
      Validators.pattern('^[0-9]*$')
    ])),
    workPlace: new FormControl('', Validators.compose([
      Validators.required,
      // Validators.minLength(3),
      // Validators.pattern('^[a-zA-Z]*$')
    ])),
    designation: new FormControl('', Validators.compose([
      Validators.required,
      // Validators.minLength(3),
      // Validators.pattern('^[a-z]*$')
    ])),
    typeofwork: new FormControl('', Validators.compose([
      Validators.required,
      // Validators.minLength(3),
      // Validators.pattern('^[a-zA-Z]*$')
    ])),
    reasonforleaving: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(150),
      // Validators.pattern('[a-zA-0-9]*$')
    ])),
    leavingSalary: new FormControl('', Validators.compose([
      Validators.required,
      // Validators.minLength(3),
      Validators.pattern('^[0-9]*$')
    ])),
  });

  ngOnInit() {
    this.getUserId();
  }
  responseMsg: string
  responseMsgTimeOut() {
    setTimeout(() => {
      this.responseMsg = null;
    }, 3000);
  }
  getUserId() {
    return this.userService.getGenerelInfo().subscribe(data => {
      this.user = data;
      this.recordObj.user = 0
    })
  }
  addRecordOfEmployeeMent() {
    return this.recordOfEmployeeService.addRecordOfEmployement(this.recordObj).subscribe(data => {
      this.recordObj = data;
      this.responseMsg = "success";
      this.responseMsgTimeOut();
      this.clear();
     

    });
    this.responseMsg = "fail";
    this.responseMsgTimeOut();
  }

  clear() {
    this.recordObj.workName = null;
    this.recordObj.periodYearTo = null;
    this.recordObj.periodYearFrom = null;
    this.recordObj.designation = null;
    this.recordObj.workType = null;
    this.recordObj.reasonForLeaving = null;
    this.recordObj.leavingSalary = null;
    this.recordObj.workPlace = null;
    this.recordObj.user = null;


  }

  previous() {
    this.router.navigate(['/appointment/appointmentInformation/professionalQualification']);
  }

  next() {
    this.router.navigate(['/appointment/appointmentInformation/referees']);
  }

}
