import { Component, OnInit } from '@angular/core';
import { Par } from '../../models/par.model';
import { ScheduleParService } from '../../services/schedule-par.service';
import { SelfAssessmentService } from '../../services/self-assessment.service';
import { ReportParAppraiseeGet } from '../../models/report-par-appraisee-get.model';
import { ScheduleParGet } from '../../models/schedule-par-get.model';
import { AppraiserAssesmentService } from '../../services/appraiser-assesment.service';
import { ReportParAppraiserGet } from '../../models/report-par-appraiser-get.model';



@Component({
  selector: 'app-par-discussion',
  templateUrl: './par-discussion.component.html',
  styleUrls: ['./par-discussion.component.css']
})
export class ParDiscussionComponent implements OnInit {

  parArray: Par[];
  reportParAppraiseeGet: ReportParAppraiseeGet[];
  reportParAppraiserGets:ReportParAppraiserGet[];
  parDataArray: ScheduleParGet = new ScheduleParGet();


  constructor(
    private scheduleParService: ScheduleParService, 
    private selfAssessmentService: SelfAssessmentService,
    private appraiserAssesmentService:AppraiserAssesmentService
    ) { }

  ngOnInit() {
    this.scheduleParService.getSchedulePar().subscribe(data => {
      this.parArray = data;
      console.log("in disscussion");
      console.log(data);
    },
      err => (console.log(err))
    )

  }

  getScore(parID) {

    this.selfAssessmentService.getParAppraiseeByParId(parID).subscribe(data => {
      //console.log(data);
      this.reportParAppraiseeGet = data;
      console.log("self assesment report")
      console.log(this.reportParAppraiseeGet)
    });

    this.appraiserAssesmentService.getParAppraiserReportsByParId(parID).subscribe(data=>{
      this.reportParAppraiserGets=data;
      console.log("apptasiser assessment report")
      console.log(data)
    },
    err=>{
      console.log("error in getting appraiser assesment score")
      console.log(err)
    })
    this.viewSchedulePar(parID);
    //this.tableArranger();
  }

  viewSchedulePar(parId) {
    //alert(parId);
    this.scheduleParService.getScheduleParData(parId).subscribe(data => {
      this.parDataArray = data;
    },
      err => (console.log(err))
    );
  }

  // tableArranger() {
  //   for (let parScores of this.reportParAppraiseeGet) {

  //     for (let parContent of this.parDataArray.scheduleParContentList) {
  //       var searchStatus: boolean = false;
  //       for (let scorelist of parScores.scoreParAppraiseeList) {
  //         if (parContent.parContentId == scorelist.parContentId) {
  //           searchStatus = true;
  //         }

  //       }
  //       if (searchStatus == false) {
  //         parScores.scoreParAppraiseeList.push(new ScoreParAppraiseeGet(parContent.parContentId, 0));
  //       }
  //     }
  //   }
  // }


}
