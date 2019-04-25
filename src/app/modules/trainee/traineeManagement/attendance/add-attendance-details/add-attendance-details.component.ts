import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AttendanceDetailsService } from './attendance-details.service';
import { AttendanceDetails } from './attendance-details';
import { AttendanceStatusServiceService } from './attendance-status-service.service';
import { AttendancetypeService } from './attendancetype.service';
import { AttendanceType } from './attendance-type';
import { AttendanceStatus } from './attendance-status';
import { ProfileInfoService } from '../../profile/view-profile-info/trainee-profile-table/profile-info.service';
import { Profile } from '../../profile/view-profile-info/trainee-profile-table/profile.model';
import { element, by } from 'protractor';



@Component({
  selector: 'app-add-attendance-details',
  templateUrl: './add-attendance-details.component.html',
  styleUrls: ['./add-attendance-details.component.css']
})
export class AddAttendanceDetailsComponent implements OnInit {
  addAttendanceForm = new FormGroup({
    startTime: new FormControl('', Validators.compose([
      Validators.required,
      // Validators.minLength(4),
      // Validators.maxLength(4),
      // Validators.pattern("^[0-9]*$")
    ])),
    endTime: new FormControl('', Validators.compose([
      Validators.required,
      // Validators.minLength(4),
      // Validators.maxLength(4),
      // Validators.pattern("^[0-9]*$")
    ])),
    attendType: new FormControl('', Validators.compose([
      Validators.required])),

    traineeName: new FormControl('', Validators.compose([
      Validators.required,
    ])),
    attendDate: new FormControl('', Validators.compose([
      Validators.required,
      // Validators.minLength(4),
      // Validators.maxLength(4),
      // Validators.pattern("^[0-9]*$")
    ])),
  });
 
  constructor(private attendDetailService:AttendanceDetailsService,
              private attendStatusService:AttendanceStatusServiceService,
              private attendTypeService:AttendancetypeService,
              private traineeService:ProfileInfoService
    ) { }
  attendanceDetail:AttendanceDetails[]
  attendanceDetailObj:AttendanceDetails=new AttendanceDetails();
  ngOnInit() {
    this.getAttendenceDetails();
    this.getAttendaanceType();
    this.getAttendaanceStatus();
    this.getTrainee();
  }

  getAttendenceDetails(){
    return this.attendDetailService.getAttendDetails().subscribe(data=>{
      this.attendanceDetail=data;
      console.log(data);
    });
  }
  addAttendanceDetails(){
    this.attendanceDetailObj.attendDate = new Date(this.attendanceDetailObj.attendDate);
    // this.attendanceDetailObj.startTime = new Date(this.attendanceDetailObj.startTime)
    // this.attendanceDetailObj.duration=2;
    this.attendanceDetailObj.attendantStatus=1
    // this.attendanceDetailObj.attendType=1
    // this.attendanceDetailObj.trainee=1
    return this.attendDetailService.addAttendDetails(this.attendanceDetailObj).subscribe(data=>{
      console.log(data);

      
    })
  }
  attendTypes:AttendanceType[];
  attendTypeObj:AttendanceType=new AttendanceType();
  getAttendaanceType(){
    return this.attendTypeService.getAttendType().subscribe(data=>{
      this.attendTypes=data;
      console.log(data);
    })
  }
  addAttendType(){
    return this.attendTypeService.addAttendType(this.attendTypeObj).subscribe(data=>{
      console.log(data);
    })
  }
  attendStatus:AttendanceStatus[];
  attendStatusObj:AttendanceStatus=new AttendanceStatus();
  getAttendaanceStatus(){
    return this.attendStatusService.getAttendStatus().subscribe(data=>{
      this.attendStatus=data;
      console.log(data);
    })
  }
  addAttendStatus(){
    return this.attendStatusService.addAttendStatus(this.attendStatusObj).subscribe(data=>{
      console.log(data);
    })
  }

  trainee:Profile[]
  getTrainee(){
    return this.traineeService.getGenerelInfo().subscribe(data=>{
      this.trainee=data;
      console.log(data);
    })
  }
}
