import { Component, OnInit } from '@angular/core';
import { InterviewSelectionService } from '../Service/interview-selection.service';
import { RecordApplicantCvService } from '../Service/record-applicant-cv.service';
import { JobService } from '../../employee-management/appointment/service/job.service';
import { HighestQualificationService } from '../Service/highest-qualification.service';
import { InterviewSelection } from '../Modal/interview-selection';
import { RecordApplicantCv } from '../Modal/record-applicant-cv';
import { Job } from '../Modal/job';
import { HighestQualification } from '../Modal/highest-qualification';
import { InterviewSelectionRejected } from '../Modal/interview-selection-rejected';
import { InterviewRejectedService } from '../Service/interview-rejected.service';



@Component({
  selector: 'app-interview-selection',
  templateUrl: './interview-selection.component.html',
  styleUrls: ['./interview-selection.component.css']
})
export class InterviewSelectionComponent implements OnInit {

  constructor(  
    private interviewSelectionServices: InterviewSelectionService,
    private interviewSelectionRejectedServices: InterviewRejectedService,
    private recordApplicantCvService: RecordApplicantCvService,
    private jobServices: JobService,
    private highQulificationServices: HighestQualificationService
  ) { }

  interviewSelectionObj = new InterviewSelection();
  interviewRejectObj = new InterviewSelectionRejected();

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
 

  getAllApplicantList() {
    this.recordApplicantCvService.getAllApplicants().subscribe(data => {
      this.recordOfApplicantAdd = data;
      console.log(data);
    });
  }

  editStatus(applicantCvData) {
    this.interviewSelectionObj = Object.assign({}, applicantCvData);
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

  createSelectApplicantCvSave() {
    //this.recordOfApplicantObj.dateOfBirth=new Date(this.recordOfApplicantObj.dateOfBirth)
    this.interviewSelectionServices.postApplicantsSelect(this.interviewSelectionObj).subscribe(dataOfSelectApplicant => {
      this.getAllApplicantList();
     alert("Applicant CV's Added Sucessfully"); 
      console.log(dataOfSelectApplicant);
    })
  
  }

  createRejectApplicantCvSave() {
    //this.recordOfApplicantObj.dateOfBirth=new Date(this.recordOfApplicantObj.dateOfBirth)
    this.interviewSelectionRejectedServices.postApplicantsRejected(this.interviewRejectObj).subscribe(dataOfRejectApplicant => {
      this.getAllApplicantList();
     alert("Applicant CV's Rejected"); 
      console.log(dataOfRejectApplicant);
    })
  
  }

}
