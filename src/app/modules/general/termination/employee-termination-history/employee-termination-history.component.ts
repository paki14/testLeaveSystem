import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { TerminationRecord } from 'src/app/models/employee-termination/termination-record';
import { TerminationRecordService } from 'src/app/services/employee-termination/termination-record.service';



@Component({
  selector: 'app-employee-termination-history',
  templateUrl: './employee-termination-history.component.html',
  styleUrls: ['./employee-termination-history.component.css']
})
export class EmployeeTerminationHistoryComponent implements OnInit {

  
  // terminationRecord: TerminationRecord[];
  msg: any;

  displayedColumns: string[] = ['name', 'terminationType', 'causeOfTermination', 'dateOfTermination'];

  termination : any; 
  
  dataSource = new MatTableDataSource<any>(this.termination);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private terminationRecordService: TerminationRecordService) { }

  ngOnInit() {
    this.getTerminationHistory() 
  }

  getTerminationHistory() {
    this.terminationRecordService.getTerminationRecord().subscribe(data => {
      this.termination = data;
      this.dataSource = new MatTableDataSource<any>(this.termination);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(data);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}