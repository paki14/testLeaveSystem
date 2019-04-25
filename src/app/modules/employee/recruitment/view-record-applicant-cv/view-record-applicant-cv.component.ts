import { Component, OnInit } from '@angular/core';
import { HighestQualification } from '../Modal/highest-qualification';
import { Job } from '../Modal/job';
import { RecordApplicantCv } from '../Modal/record-applicant-cv';
import { HighestQualificationService } from '../Service/highest-qualification.service';
import { JobService } from '../Service/job.service';
import { RecordApplicantCvService } from '../Service/record-applicant-cv.service';

@Component({
  selector: 'app-view-record-applicant-cv',
  templateUrl: './view-record-applicant-cv.component.html',
  styleUrls: ['./view-record-applicant-cv.component.css']
})
export class ViewRecordApplicantCvComponent implements OnInit {

  constructor(private recordApplicantCvService: RecordApplicantCvService,
    private jobServices: JobService,
    private highQulificationServices: HighestQualificationService, ) { }

  recordOfApplicantObj: RecordApplicantCv = new RecordApplicantCv();
  recordOfApplicantAdd: RecordApplicantCv[];


  job: Job[];
  hightQulification: HighestQualification[];

  ngOnInit() {
    this.getAllJobList();
    this.getAllHighQulificationList();
    this.getAllApplicantList();

  }

  getAllApplicantList() {
    this.recordApplicantCvService.getAllApplicants().subscribe(data => {
      this.recordOfApplicantAdd = data;
      console.log(data);
    });
  }
  getAllJobList() {
    this.jobServices.getAllJob().subscribe(data => {
      this.job = data;
      console.log(data);
    });
  }

  getAllHighQulificationList() {
    this.highQulificationServices.getAllHighestQualification().subscribe(datahighQulification => {
      this.hightQulification = datahighQulification;
      console.log(datahighQulification);
    });
  }
  editStatus(recordOfApplicantAdd) {
    this.recordOfApplicantObj = Object.assign({}, recordOfApplicantAdd);
  }
  updatePlanVacancy() {
    this.recordApplicantCvService.updateRecordOfApplicantCvVacancy(this.recordOfApplicantObj).subscribe(data => {
      this.getAllApplicantList();
    });
  }

  deleteApplicantById(recordOfApplicantAdd) {
    this.recordApplicantCvService.deleteApplicants(recordOfApplicantAdd).subscribe(data => {
      // this.recordOfApplicantObj.id = deleteApplicant.id;
      // alert("Applicant Cv's Deleted");
      this.getAllApplicantList();
    });

  }
}