import { Component, OnInit, ViewChild } from '@angular/core';
import { LeaveRequest } from 'src/app/models/leave-management/leave-request';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { LeaveRequestService } from 'src/app/services/leave-management/leave-request.service';

@Component({
  selector: 'app-employee-leave-history',
  templateUrl: './employee-leave-history.component.html',
  styleUrls: ['./employee-leave-history.component.css']
})
export class EmployeeLeaveHistoryComponent implements OnInit {

  displayedColumns: string[] = ['type', 'startdate', 'enddate', 'numberofdays', 'reason', 'status','cancel'];

  empleavehistory: LeaveRequest[];
  dataSource = new MatTableDataSource<any>(this.empleavehistory);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  

  constructor(private leaveRequestService: LeaveRequestService) { }

  ngOnInit() {    
    this.getAllLeaveRequest();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllLeaveRequest() {
    this.leaveRequestService.getAllLeaveRequest().subscribe(data => {
      this.empleavehistory = data;
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(data);
    })
  }
}