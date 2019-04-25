import { AcceptLeave } from './../../../../../models/leave-management/accept-leave';
import { AcceptLeaveService } from './../../../../../services/leave-management/accept-leave.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';


@Component({
  selector: 'app-accepted-leave',
  templateUrl: './accepted-leave.component.html',
  styleUrls: ['./accepted-leave.component.css']
})
export class AcceptedLeaveComponent implements OnInit {

  displayedColumns: string[] = ['name','type', 'startdate', 'enddate', 'numberofdays', 'reason','acceptedby'];

  acceptLeave: AcceptLeave[];
  dataSource = new MatTableDataSource<any>(this.acceptLeave);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  

  constructor(private acceptLeaveService: AcceptLeaveService) { }

  ngOnInit() { 
     
    this.getAllAcceptedLeaveRequest();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllAcceptedLeaveRequest() {
    this.acceptLeaveService.getAllAcceptData().subscribe(data =>{
      this.acceptLeave = data;
      this.dataSource = new MatTableDataSource<any>(this.acceptLeave);      
    })
  }
}