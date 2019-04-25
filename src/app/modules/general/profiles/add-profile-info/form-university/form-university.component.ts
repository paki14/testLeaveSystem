import { Component, OnInit } from '@angular/core';
import { ProfessionalQualificationService } from '../../view-profile-info/view-professional-qualification/professional-qualification.service';
import { ProfessionalQualification } from '../../view-profile-info/view-professional-qualification/professional-qualification.model';

import { ProfileInfoService } from '../../view-profile-info/profile-table/profile-info.service';
import { Profile } from '../../view-profile-info/profile-table/profile.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-university',
  templateUrl: './form-university.component.html',
  styleUrls: ['./form-university.component.css']
})
export class FormUniversityComponent implements OnInit {
  profesionalObj: ProfessionalQualification = new ProfessionalQualification();
  user: Profile[];
  constructor(
    private professionalQualificationService: ProfessionalQualificationService,
    private userService: ProfileInfoService
  ) { }

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
      this.profesionalObj.user = 0
    })
  }

  addEmpProQualification() {

    return this.professionalQualificationService.createEmpProQualification(this.profesionalObj).subscribe(data => {
      console.log(data);
      // alert("added");
      this.clear()
      this.responseMsg = "success";
      this.responseMsgTimeOut();
      this.clear();

    });
    this.responseMsg = "fail";
    this.responseMsgTimeOut();
  }
  clear() {
    this.profesionalObj.courseName = null;
    this.profesionalObj.periodYearTo = null;
    this.profesionalObj.periodYearFrom = null;
    this.profesionalObj.result = null;
    this.profesionalObj.gpa = null;
    this.profesionalObj.user = null;
    this.profesionalObj.insituteName = null;
    this.profesionalObj.courseType = null;
    this.profesionalObj.examinationYear = null;

  }

  addUserForm = new FormGroup({
    fullName: new FormControl('', Validators.compose([
      Validators.required,
      //Validators.minLength(3),
      // Validators.pattern('^[a-z]*$')
    ])),
    universityName: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(5),
    ])),
    courseName: new FormControl('', Validators.compose([
      Validators.required,
    ])),
    from: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      Validators.minLength(4),
      Validators.maxLength(4)
    ])),
    to: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      Validators.minLength(4),
      Validators.maxLength(4)
    ])),
    courseType: new FormControl('', Validators.compose([
      Validators.required,
    ])),
    examinationYear: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      Validators.minLength(4),
      Validators.maxLength(4)
    ])),
    subject: new FormControl('', Validators.compose([
      Validators.required
    ])),
    gpa: new FormControl('', Validators.compose([
      Validators.required,
      // Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/),
      // Validators.pattern(^[0-9]*$),
      Validators.maxLength(4)
    ]))


  });

}
