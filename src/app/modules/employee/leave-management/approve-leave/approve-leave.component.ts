import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { LeaveRequest } from 'src/app/models/leave-management/leave-request';
import { LeaveRequestService } from 'src/app/services/leave-management/leave-request.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-approve-leave',
  templateUrl: './approve-leave.component.html',
  styleUrls: ['./approve-leave.component.css']
})
export class ApproveLeaveComponent implements OnInit {

  displayedColumns: string[] = ['name','startdate','enddate','numberofdays','type','reason','accept/reject'];

  leave : LeaveRequest[];
  dataSource = new MatTableDataSource<any>(this.leave);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private leaveRequestService: LeaveRequestService, 
    private interactionService : InteractionService) { }

  ngOnInit() {    
    this.getAllLeaveRequest();
    this.getSuccessMsg();   
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllLeaveRequest() {
    this.leaveRequestService.getPendingLeaveRequest().subscribe(data => {
      this.leave = data;
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  sentLeaveId(leaveId){
    this.interactionService.setLeaveId(leaveId);
  }

  sendUserId(user) {
    this.interactionService.sendUserId(user);
  }

  getSuccessMsg() {
    this.interactionService.msgDataSource$.subscribe(data =>{
      if (data == "AcceptSuccess" || data == "RejectSuccess") {
        this.getAllLeaveRequest();
      }
    })
  }
}
