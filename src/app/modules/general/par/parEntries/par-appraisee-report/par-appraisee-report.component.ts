import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, NgForm, FormControl } from '@angular/forms';
import { Par } from '../../models/par.model';
import { ScheduleParGet } from '../../models/schedule-par-get.model';
import { ScheduleParService } from '../../services/schedule-par.service';
import { ReportParAppraiseePost } from '../../models/report-par-appraisee-post';
import { SelfAssessmentService } from '../../services/self-assessment.service';


@Component({
  selector: 'app-par-appraisee-report',
  templateUrl: './par-appraisee-report.component.html',
  styleUrls: ['./par-appraisee-report.component.css']
})
export class ParAppraiseeReportComponent implements OnInit {
  parArray: Par[];
  parDataArray: ScheduleParGet = new ScheduleParGet();
  reportParAppraiseePost: ReportParAppraiseePost = new ReportParAppraiseePost();
  reportParId: number;

  constructor(private scheduleParService: ScheduleParService, private selfAssessmentService: SelfAssessmentService) { }

  ngOnInit() {
    this.scheduleParService.getSchedulePar().subscribe(data => {
      this.parArray = data;
    },
      err => (console.log(err))
    )

  }

  // creating form group for scores 
  scoreSelfAssesment = new FormGroup({
  
    'scoreParAppraiseeList': new FormArray([

    ])
  });

  createScoreArrayDynamic(contentId, contentName) {
    let scoreArray = this.scoreSelfAssesment.get('scoreParAppraiseeList') as FormArray;
    scoreArray.push(new FormGroup({
      'parContentId': new FormControl(contentId),
      'parContentName': new FormControl(contentName),
      'score': new FormControl(),
      'comment': new FormControl()

    })
    )
  }

  viewSchedulePar(parId) {
    //alert(parId);
    this.scheduleParService.getScheduleParData(parId).subscribe(data => {
      this.parDataArray = data;
      // console.log(data)
      this.reportParId = parId;
      this.formScore();
    },
      err => (console.log(err)))
  }

 
  formScore() {
    let eraseArray = this.scoreSelfAssesment.get('scoreParAppraiseeList') as FormArray;
   
    // erase data in the array
    while (eraseArray.length !==0) {
      eraseArray.removeAt(0);
    }

    // push data to array
    for (let parContent of this.parDataArray.scheduleParContentList) {
      this.createScoreArrayDynamic(parContent.parContentId, parContent.parContentName)
     
    }
   
  }

  formData(scoreForm: NgForm) {
     this.selfAssessmentService.apprasiseeApplyScore(scoreForm.value,this.reportParId).subscribe(
        data => {
        alert("sucessfully apply score");
      },
      err=>{
        alert("something went wrong");
        console.log(err);
      });
   
  }

}
