import { Component, OnInit } from '@angular/core';
import { AttendanceDetailsService } from '../add-attendance-details/attendance-details.service';
import { AttendanceDetails } from '../add-attendance-details/attendance-details';


@Component({
  selector: 'app-attendance-details',
  templateUrl: './attendance-details.component.html',
  styleUrls: ['./attendance-details.component.css']
})
export class AttendanceDetailsComponent implements OnInit {

  constructor(private attendanceDetailsService:AttendanceDetailsService) { }

  ngOnInit() {
    this.getAttendanceDetails();
  }
  attendantDetails:AttendanceDetails[]
  getAttendanceDetails(){
    return this.attendanceDetailsService.getAttendDetails().subscribe(data=>{
      this.attendantDetails=data;
    })
  }
}
