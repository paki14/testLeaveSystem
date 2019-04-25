import { Component, OnInit } from '@angular/core';
import { TerminationRecord } from 'src/app/models/employee-termination/termination-record';
import { TerminationRecordService } from 'src/app/services/employee-termination/termination-record.service';
import { TerminationTypeService } from 'src/app/services/employee-termination/termination-type.service';
import { TerminationType } from 'src/app/models/employee-termination/termination-type';

@Component({
  selector: 'app-employee-add-termination-record',
  templateUrl: './employee-add-termination-record.component.html',
  styleUrls: ['./employee-add-termination-record.component.css']
})
export class EmployeeAddTerminationRecordComponent implements OnInit {
  terminationRecordObj = new TerminationRecord;
  terminationRecord: TerminationRecord[];
  msg: any;
  terminationTypes: TerminationType[];


  constructor(private terminationRecordService: TerminationRecordService,
    private terminationTypeService: TerminationTypeService) { }

  ngOnInit() {
    this.getTerminationRecord();
    this.getTerminationType();
  }
  getTerminationRecord() {
    this.terminationRecordService.getTerminationRecord().subscribe(data => {
      this.terminationRecord = data;
      console.log(data);
    });
  }

  getTerminationType() {
    this.terminationTypeService.getTerminationType().subscribe(data => {
      this.terminationTypes = data;
      console.log(data);
    });

  }
  createTerminationRecord() {
    this.terminationRecordService.createTerminationRecord(this.terminationRecordObj).subscribe(data => {
    });
  }

}
