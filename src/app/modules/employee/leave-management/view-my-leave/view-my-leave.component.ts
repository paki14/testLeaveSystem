import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';
import { LeaveRequest } from 'src/app/models/leave-management/leave-request';
import { LeaveRequestService } from 'src/app/services/leave-management/leave-request.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-view-my-leave',
  templateUrl: './view-my-leave.component.html',
  styleUrls: ['./view-my-leave.component.css']
})
export class ViewMyLeaveComponent implements OnInit {
  info:any;

  displayedColumns: string[] = ['leaveType','startDate','endDate','numberOfDays','reason','status','cancel'];
  leaveRequestByUsername: LeaveRequest[];
  dataSource = new MatTableDataSource<any>(this.leaveRequestByUsername);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private token: TokenStorageService,
    private leaveRequestService: LeaveRequestService,
    private interactionService: InteractionService
    ) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.getLeaveRequestByUser();
    this.getSuccessMessage();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getLeaveRequestByUser() {
    this.leaveRequestService.getAllLeaveRequestByUserName(this.info.username).subscribe(data => {
      this.leaveRequestByUsername = data;
      this.dataSource = new MatTableDataSource<any>(this.leaveRequestByUsername);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  sendLeaveRequest(leaveRequest){
    this.interactionService.sendLeaveRequest(leaveRequest);
  }

  getSuccessMessage() {
    this.interactionService.msgDataSource$.subscribe(data => {
      if (data == "leaveRequestSent" || data == "cancelSuccess") {
        this.getLeaveRequestByUser();
      }
    })
  }
}
