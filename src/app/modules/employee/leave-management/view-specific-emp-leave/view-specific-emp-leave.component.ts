import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { LeaveRequest } from 'src/app/models/leave-management/leave-request';
import { LeaveRequestService } from 'src/app/services/leave-management/leave-request.service';
import { User } from '../../recruitment/Modal/user';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-view-specific-emp-leave',
  templateUrl: './view-specific-emp-leave.component.html',
  styleUrls: ['./view-specific-emp-leave.component.css']
})
export class ViewSpecificEmpLeaveComponent implements OnInit {

  displayedColumns: string[] = ['typeOfLeave', 'appliedOn', 'takenOn', 'reason', 'noOfDays', 'allocated', 'balance', 'acceptedOrRejected'];

  specificLeaveDetails: LeaveRequest[];

  dataSource = new MatTableDataSource<any>(this.specificLeaveDetails);
  user = new User();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private interactionService: InteractionService, 
    private leaveRequestService: LeaveRequestService
    ) { }

  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.interactionService.userDataSource$.subscribe(data => {
      this.user = data;
      this.getAllSpecificLeaveRequest();
    })
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.paginator.firstPage();
  }

  getAllSpecificLeaveRequest() {
    this.leaveRequestService.getAllLeaveRequestByUser(this.user.id).subscribe(data => {
      this.specificLeaveDetails = data;
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
}