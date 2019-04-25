import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RecordApplicantCv } from '../Modal/record-applicant-cv';
import { RecordApplicantCvService } from '../Service/record-applicant-cv.service';
import { Job } from '../Modal/job';
import { JobService } from '../Service/job.service';
import { HighestQualification } from '../Modal/highest-qualification';
import { HighestQualificationService } from '../Service/highest-qualification.service';

@Component({
  selector: 'app-record-applicant-cv',
  templateUrl: './record-applicant-cv.component.html',
  styleUrls: ['./record-applicant-cv.component.css']
})
export class RecordApplicantCvComponent implements OnInit {

  constructor(private recordApplicantCvService: RecordApplicantCvService,
    private jobServices: JobService,
    private highQulificationServices: HighestQualificationService
  ) { }


  recordOfApplicantObj = new RecordApplicantCv();
  recordOfApplicantAdd: RecordApplicantCv[];
  recordOfApplicantEdit = new RecordApplicantCv;

  job: Job[];
  hightQulification: HighestQualification[];

  ngOnInit() {
    this.getAllJobList();
    this.getAllHighQulificationList();
    this.getAllApplicantList();

  }
  createApplicantCv() {
    this.recordOfApplicantObj.dateOfBirth = new Date(this.recordOfApplicantObj.dateOfBirth)
    this.recordApplicantCvService.postApplicants(this.recordOfApplicantObj).subscribe(dataOfApplicant => {
      this.getAllApplicantList();
      alert("Applicant CV's Added Sucessfully");
      console.log(dataOfApplicant);
    })

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
  recordApplicantCvForm = new FormGroup({
    fName: new FormControl('', Validators.compose([
      Validators.required
     
    ])),
  })

}
