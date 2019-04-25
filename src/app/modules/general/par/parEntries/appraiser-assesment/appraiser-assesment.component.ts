import { Component, OnInit } from '@angular/core';
import { ScheduleParGet } from '../../models/schedule-par-get.model';
import { Par } from '../../models/par.model';
import { ReportParAppraiserPost } from '../../models/report-par-appraiser-post';
import { ScheduleParService } from '../../services/schedule-par.service';
import { AppraiserAssesmentService } from '../../services/appraiser-assesment.service';
import { FormGroup, FormArray, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appraiser-assesment',
  templateUrl: './appraiser-assesment.component.html',
  styleUrls: ['./appraiser-assesment.component.css']
})
export class AppraiserAssesmentComponent implements OnInit {

  parArray: Par[];
  parDataArray: ScheduleParGet = new ScheduleParGet();
  reportParAppraiserPost: ReportParAppraiserPost = new ReportParAppraiserPost();
  reportParId: number;

  constructor(private scheduleParService: ScheduleParService,
    private appraiserAssesmentService: AppraiserAssesmentService,
    private router: Router) { }

  ngOnInit() {
    this.scheduleParService.getSchedulePar().subscribe(data => {
      this.parArray = data;
    },
      err => (console.log(err))
    )

  }

  viewSchedulePar(parId) {
    //alert(parId);
    this.scheduleParService.getScheduleParData(parId).subscribe(data => {
      this.parDataArray = data;
      console.log(data)
      this.reportParId = parId;
      this.formScore();

    },
      err => (console.log(err))
    );
  }

  scoreAppraiserAssesment = new FormGroup({

    'appraisedById': new FormControl(),
    'scoreParAppraiserList': new FormArray([

    ])
  });

  createScoreArrayDynamic(contentId, contentName) {
    let scoreArray = this.scoreAppraiserAssesment.get('scoreParAppraiserList') as FormArray;
    scoreArray.push(new FormGroup({
      'parContentId': new FormControl(contentId),
      'parContentName': new FormControl(contentName),
      'score': new FormControl(),
      'comment': new FormControl()

    })
    )
  }

  formScore() {
    let eraseArray = this.scoreAppraiserAssesment.get('scoreParAppraiserList') as FormArray;

    // erase data in the array
    while (eraseArray.length !== 0) {
      eraseArray.removeAt(0);
    }

    // push data to array
    for (let parContent of this.parDataArray.scheduleParContentList) {
      this.createScoreArrayDynamic(parContent.parContentId, parContent.parContentName)
    }
  }

  // this function is used to send data
  formData(scoreForm: NgForm) {
    this.appraiserAssesmentService.apprasiserPutScore(scoreForm.value, this.reportParId).subscribe(
      data => {
        alert("sucessfully apply score");
      },
      err => {
        alert("something went wrong");
        console.log(err);
      });
  }
  goToAppraiserScore(parId) {
    this.router.navigate(['/par/appraiserAssesment', parId]);
  }

}
