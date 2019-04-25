import { Component, OnInit } from '@angular/core';
import { AttendanceDetailsService } from '../add-attendance-details/attendance-details.service';
import { AttendanceDetails } from '../add-attendance-details/attendance-details';

@Component({
  selector: 'app-individual-attendance-detail',
  templateUrl: './individual-attendance-detail.component.html',
  styleUrls: ['./individual-attendance-detail.component.css']
})
export class IndividualAttendanceDetailComponent implements OnInit {

  constructor(private attendanceDetailsService:AttendanceDetailsService) { }

  ngOnInit() {
    this. getAttendanceDetailByTrainee();
  }
  traineeAttend:AttendanceDetails[]
  getAttendanceDetailByTrainee(){
    return this.attendanceDetailsService.getAttendanceDetailByTrainee(1).subscribe(data=>{
      this.traineeAttend=data;
    })
  }
}
