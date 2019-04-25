import { Component, OnInit } from '@angular/core';
import { DiscussionSchedule } from 'src/app/models/employee-termination/discussion-schedule';
import { DiscussionScheduleService } from 'src/app/services/employee-termination/discussion-schedule.service';

@Component({
  selector: 'app-employee-discussion-schedule',
  templateUrl: './employee-discussion-schedule.component.html',
  styleUrls: ['./employee-discussion-schedule.component.css']
})
export class EmployeeDiscussionScheduleComponent implements OnInit {
  discussionScheduleObj= DiscussionSchedule;
  discussionSchedule : DiscussionSchedule[];
  msg : any;
  constructor(private discussionScheduleService:DiscussionScheduleService) { }

  ngOnInit() {
    this.getDiscussionSchedule();
  }

  getDiscussionSchedule() {
    this.discussionScheduleService.getDiscussionSchedule().subscribe(data => {
      this.discussionSchedule = data;
      console.log(data);
    });
  }

}
