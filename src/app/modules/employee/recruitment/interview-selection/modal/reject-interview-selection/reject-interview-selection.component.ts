import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reject-interview-selection',
  templateUrl: './reject-interview-selection.component.html',
  styleUrls: ['./reject-interview-selection.component.css']
})
export class RejectInterviewSelectionComponent implements OnInit {
rejectInterviewSelection: FormGroup;
  constructor() {
    this.rejectInterviewSelection= new FormGroup({
      'rejectName': new FormControl,
      'rejectEmail': new FormControl,
      'rejectReason':new FormControl,

    })
   }

  ngOnInit() {
  }

}
