import { Component, OnInit } from '@angular/core';
import { ScheduleParGet } from '../../models/schedule-par-get.model';
import { ScheduleParService } from '../../services/schedule-par.service';
import { Par } from '../../models/par.model';
import { AppraiserAssesmentService } from '../../services/appraiser-assesment.service';
import { NgForm, FormGroup, FormControl, FormArray } from '@angular/forms';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appraiser-assesment-score',
  templateUrl: './appraiser-assesment-score.component.html',
  styleUrls: ['./appraiser-assesment-score.component.css']
})
export class AppraiserAssesmentScoreComponent implements OnInit {

  parArray: Par[];
  parDataArray: ScheduleParGet = new ScheduleParGet();
  reportParId: number;
  scoreParId: any;
  constructor(private scheduleParService: ScheduleParService,
    private appraiserAssesmentService: AppraiserAssesmentService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.scheduleParService.getSchedulePar().subscribe(data => {
      this.parArray = data;
    },
      err => (console.log(err))
    );
    this.route.paramMap.subscribe(
      params => {
        this.scoreParId = +params.get('id');
        // alert(this.scoreParId);
        this.viewSchedulePar(this.scoreParId);
      });
  }

  scoreAppraiserAssesment = new FormGroup({

    'appraisedById': new FormControl(),
    'scoreParAppraiserList': new FormArray([

    ])
  });

  viewSchedulePar(parId) {
    // alert(parId);
    this.scheduleParService.getScheduleParData(parId).subscribe(data => {
      this.parDataArray = data;
      console.log(data);
      this.reportParId = parId;
      this.formScore();

    },
      err => (console.log(err))
    );
  }
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

    for (let parContent of this.parDataArray.scheduleParContentList) {
      this.createScoreArrayDynamic(parContent.parContentId, parContent.parContentName)
    }
  }
  formData(scoreForm: NgForm) {
    this.appraiserAssesmentService.apprasiserPutScore(scoreForm.value, this.reportParId).subscribe(
      data => {
        alert('sucessfully apply score');
      },
      err => {
        alert('something went wrong');
        console.log(err);
      });
  }

  goBack() {
    this.router.navigate(['/par/appraiserAssesment']);
  }
}
