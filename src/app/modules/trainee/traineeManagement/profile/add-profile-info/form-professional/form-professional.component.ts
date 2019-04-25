import { Component, OnInit } from '@angular/core';
import { ViewProfessionalMembershipService } from '../../view-profile-info/view-professional-membership/view-professional-membership.service';
import { ViewProfessionalMembership } from '../../view-profile-info/view-professional-membership/view-professional-membership';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Profile } from '../../view-profile-info/trainee-profile-table/profile.model';
import { ProfileInfoService } from '../../view-profile-info/trainee-profile-table/profile-info.service';

@Component({
  selector: 'app-form-professional',
  templateUrl: './form-professional.component.html',
  styleUrls: ['./form-professional.component.css']
})
export class FormProfessionalComponent implements OnInit {

  membershipObj: ViewProfessionalMembership = new ViewProfessionalMembership();
  user: Profile[];

  constructor(
    private professionalMembershipService: ViewProfessionalMembershipService,
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

  addprofForm = new FormGroup({
    empName: new FormControl('', Validators.compose([
      Validators.required,
      // Validators.minLength(3)
    ])),
    university: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ])),
    fromyear: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
      Validators.pattern("^[0-9]*$")
    ])),
    toyear: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
      Validators.pattern("^[0-9]*$")
    ])),
    eventtype: new FormControl('', Validators.compose([
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(3)
    ])),
    eventname: new FormControl('', Validators.compose([
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(3)
    ])),
    nameOfaward: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern("^[0-9]*$")
      // Validators.maxLength(50),
      // Validators.minLength(3)
    ]))
  });


  addProMembership() {

    return this.professionalMembershipService.createProMembership(this.membershipObj).subscribe(data => {
      console.log(data);
      this.clear();
      this.responseMsg = "success";
      this.responseMsgTimeOut();
      this.clear();

    });
    this.responseMsg = "fail";
    this.responseMsgTimeOut();
  }
  getUserId() {
    return this.userService.getGenerelInfo().subscribe(data => {
      this.user = data;
      this.membershipObj.trainee = 0;
    })
  }

  clear() {
    this.membershipObj.eventName = null;
    this.membershipObj.periodYearTo = null;
    this.membershipObj.periodYearFrom = null;
    this.membershipObj.eventType = null;
    this.membershipObj.organizationName = null;
    this.membershipObj.trainee = null;
    this.membershipObj.award = null;
    this.membershipObj.eventName = null;

  }
}
