import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { AppoinmentDetailsService } from './appoinment-details.service';
import { Appointment } from '../models/appointment.model';

import { ProfileInfoService } from 'src/app/modules/general/profiles/view-profile-info/profile-table/profile-info.service';
import { Profile } from 'src/app/modules/general/profiles/view-profile-info/profile-table/profile.model';
import { JobService } from '../service/job.service';
import { DepartmentService } from '../../../recruitment/Service/department.service';
import { DesignationService } from '../service/designation.service';
import { AppointmentTypeService } from '../service/appointment-type.service';
import { Department } from '../../../recruitment/Modal/department';
import { Job } from '../../../recruitment/Modal/job';
import { Designation } from '../models/designation.model';
import { AppointmentType } from '../models/appointment-type.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})

export class AppointmentDetailsComponent implements OnInit {

  constructor(private router: Router,
    private appointmentService: AppoinmentDetailsService,
    private jobService: JobService,
    private departmentService: DepartmentService,
    private designationService: DesignationService,
    private appointmentTypeService: AppointmentTypeService,
    private userService: ProfileInfoService,
  ) { }
  appointmentObj = new Appointment();
  appointmentDetails: Appointment[];
  departments: Department[];
  jobs: Job[];
  designations: Designation[];
  appointmentTypes: AppointmentType[];
  users: Profile[];


  ngOnInit() {
    this.GetAppointmentDetails();
    this.getUserId();
    this.getJobId();
    this.getDepartmentId();
    this.getDesignationId();
    this.getAppointmentTypeId();
  }
  responseMsg: string
  responseMsgTimeOut() {
    setTimeout(() => {
      this.responseMsg = null;
    }, 3000);
  }
  getUserId() {
    return this.userService.getGenerelInfo().subscribe(data => {
      this.users = data;
      this.appointmentObj.user=0;
    })
  }
  getJobId() {
    return this.jobService.getAllJob().subscribe(data => {
      this.jobs = data;
      
    })
  }
  getDepartmentId() {
    return this.departmentService.getAllDepartment().subscribe(data => {
      this.departments = data;
      this.appointmentObj.department=0;
    })
  }
  getDesignationId() {
    return this.designationService.getDesignation().subscribe(data => {
      this.designations = data;
      this.appointmentObj.designation=0;
    })
  }
  getAppointmentTypeId() {
    return this.appointmentTypeService.getAppointmentType().subscribe(data => {
      this.appointmentTypes = data;
      this.appointmentObj.appointmentType=0;
    })
  }
  CreateAppointmentDetails() {
    this.appointmentService.AddAppointmentDetails(this.appointmentObj).subscribe(data => {
      this.appointmentObj = data;
      this.GetAppointmentDetails();
      this.responseMsg = "success";
      this.responseMsgTimeOut();
        this.clear();
      
      });
      this.responseMsg = "fail";
      this.responseMsgTimeOut();
  }

  GetAppointmentDetails() {
    this.appointmentService.viewAppointmentDetails().subscribe(data => {
      console.log(data);
      this.appointmentDetails = data;
    })
  }
  clear(){
    this.appointmentObj.user=null
    this.appointmentObj.department=null
    this.appointmentObj.designation=null
    this.appointmentObj.jobDesc=null
    this.appointmentObj.appoinmentDate=null
    this.appointmentObj.appointmentType=null


  }

  appointForm = new FormGroup({
    empName: new FormControl('', Validators.compose([
      Validators.required

    ])),
    department: new FormControl('', Validators.compose([
      Validators.required

    ])),
    jobDescription: new FormControl('', Validators.compose([
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(3)
    ])),
    appointDate: new FormControl('', Validators.compose([
      Validators.required

    ])),
    designation: new FormControl('', Validators.compose([
      Validators.required
    ])),
    appointType: new FormControl('', Validators.compose([
      Validators.required
    ]))
  })

}
