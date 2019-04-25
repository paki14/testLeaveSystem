import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-interview-selection',
  templateUrl: './select-interview-selection.component.html',
  styleUrls: ['./select-interview-selection.component.css']
})
export class SelectInterviewSelectionComponent implements OnInit {
selectInterviewSelection: FormGroup;
  constructor() {
    this.selectInterviewSelection= new FormGroup({
      'selectName': new FormControl,
      'selectDate': new FormControl,
      'selectTime': new FormControl,
      'selectPlace': new FormControl,
      'selectPost': new FormControl,
      'selectEmail': new FormControl,
    })
   }

  ngOnInit() {
  }

}