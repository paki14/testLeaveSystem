import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-view-record-applicant-cv',
  templateUrl: './edit-view-record-applicant-cv.component.html',
  styleUrls: ['./edit-view-record-applicant-cv.component.css']
})
export class EditViewRecordApplicantCvComponent implements OnInit {
  editViewRecordApplicantCv: FormGroup;
  constructor() { 
    this.editViewRecordApplicantCv= new FormGroup({
      'editFullName': new FormControl,
      'editEmail': new FormControl,
      'editNic': new FormControl,
      'editAge': new FormControl,
      'editDob': new FormControl,
      'editQualification': new FormControl,
      'editPost': new FormControl,
      'editAttachCv': new FormControl,
      'editAddress': new FormControl,
    })
  }

  ngOnInit() {
  }

}
