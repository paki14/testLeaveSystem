import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { RejectLeaveService } from 'src/app/services/leave-management/reject-leave.service';
import { RejectLeave } from 'src/app/models/leave-management/reject-leave';


@Component({
  selector: 'app-rejected-leave',
  templateUrl: './rejected-leave.component.html',
  styleUrls: ['./rejected-leave.component.css']
})
export class RejectedLeaveComponent implements OnInit {

  displayedColumns: string[] = ['name','type', 'startdate', 'enddate', 'numberofdays', 'reason', 'rejectedby','rejectreason'];

  rejectLeave: RejectLeave[];
  dataSource = new MatTableDataSource<any>(this.rejectLeave);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  

  constructor(private rejectLeaveService: RejectLeaveService) { }

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
    this.rejectLeaveService.getAllRejectedLeave().subscribe(data => {
      this.rejectLeave = data;
      this.dataSource = new MatTableDataSource<any>(this.rejectLeave);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.rejectLeave);
    })
  }
}