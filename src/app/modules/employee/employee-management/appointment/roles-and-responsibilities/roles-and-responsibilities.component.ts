import { Component, OnInit } from '@angular/core';
import { RolesAndResponsibilitiesService } from 'src/app/modules/general/profiles/view-profile-info/view-roles-and-resposibilities/roles-and-responsibilities.service';
import { RolesAndResponsibilities } from 'src/app/modules/general/profiles/view-profile-info/view-roles-and-resposibilities/roles-and-responsibilities';
import { ProfileInfoService } from 'src/app/modules/general/profiles/view-profile-info/profile-table/profile-info.service';
import { Profile } from 'src/app/modules/general/profiles/view-profile-info/profile-table/profile.model';
import { JobService } from '../service/job.service';
import { KeyActivityService } from '../service/key-activity.service';
import { LocationService } from '../service/location.service';
import { KeyActivity } from '../models/key-activity.model';
import { Location } from '../models/location.model';
import { Job } from '../../../recruitment/Modal/job';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-roles-and-responsibilities',
  templateUrl: './roles-and-responsibilities.component.html',
  styleUrls: ['./roles-and-responsibilities.component.css']
})
export class RolesAndResponsibilitiesComponent implements OnInit {

  user:Profile[];
  keyActivity:KeyActivity[];
  locations:Location[];
  job:Job[];

  rolesandResObj:RolesAndResponsibilities=new RolesAndResponsibilities()
  constructor(
    private rolesandResponsibilityService:RolesAndResponsibilitiesService,
    private userService:ProfileInfoService,
    private jobService:JobService,
    private keyactivityService:KeyActivityService,
    private locationService:LocationService,
    ) { }

  ngOnInit() {
    this.getUserId();
    this.getKeyActivityId();
    this. getJobId();
    this.getLocationId();
  }
  responseMsg: string
  responseMsgTimeOut() {
    setTimeout(() => {
      this.responseMsg = null;
    }, 3000);
  }
  getKeyActivityId(){
    return this.keyactivityService.getAllKeyActivity().subscribe(data=>{
      this.keyActivity=data;
      this.rolesandResObj.keyActivity=0;
    })
  }
  getLocationId(){
    return this.locationService.getAllLocation().subscribe(data=>{
      this.locations=data;
      this.rolesandResObj.location=0;
    })  
  }
  getJobId(){
    return this.jobService.getAllJob().subscribe(data=>{
      this.job=data;
      this.rolesandResObj.job=0;
    })
  }
  getUserId(){
    return this.userService.getGenerelInfo().subscribe(data=>{
      this.user=data;
      this.rolesandResObj.user=0;
    })
  }

  addRolesAndResponsibilities(){
    // this.rolesandResObj.id=6
    return this.rolesandResponsibilityService.addrolesAndResponsibilities(this.rolesandResObj).subscribe(data=>{
      // this.rolesandResObj=data;
      // alert("asfd")
      // console.log(data)
      this.responseMsg = "success";
      this.responseMsgTimeOut();
        this.clear();
      
      });
      this.responseMsg = "fail";
      this.responseMsgTimeOut();
  }

  clear() {
    this.rolesandResObj.user= null;
    this.rolesandResObj.job = null;
    this.rolesandResObj.keyActivity = null;
    this.rolesandResObj.location = null;
    this.rolesandResObj.responsibility = null;
    this.rolesandResObj.overAllPurpose = null;
  }

  addUserForm=new FormGroup({
    fullName:new FormControl('', Validators.compose([
      Validators.required,
    ])),
    job:new FormControl('', Validators.compose([
      Validators.required,
    ])),
    location:new FormControl('', Validators.compose([
      Validators.required,
    ])),
    key:new FormControl('', Validators.compose([
      Validators.required,
    ])),
    overAllPurpose: new FormControl('', Validators.compose([
      Validators.required,
      Validators.maxLength(150)
    ])),
    responsibility:new FormControl('', Validators.compose([
      Validators.required,
    ])),

  }

  )
}
