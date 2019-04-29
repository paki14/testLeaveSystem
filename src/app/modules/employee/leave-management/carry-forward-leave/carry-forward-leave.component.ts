import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { CarryforwardLeaveRequestService } from '../../../../services/leave-management/carryforward-leave-request.service';
import { TokenStorageService } from '../../../../services/login/token-storage.service';
import { InteractionService } from '../../../../services/interaction.service';
import { CarryforwardRequestData } from '../../../../models/leave-management/carryforward-leave-request';


@Component({
  selector: 'app-carry-forward-leave',
  templateUrl: './carry-forward-leave.component.html',
  styleUrls: ['./carry-forward-leave.component.css']
})
export class CarryForwardLeaveComponent implements OnInit {

  displayedColumns: string[] = ['employeename', 'employeeid', 'carryforwarded', 'status'];
  carryforwardLeave: CarryforwardRequestData[];
  info: any;

  dataSource = new MatTableDataSource<CarryforwardRequestData>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private carryforwardLeaveRequestService: CarryforwardLeaveRequestService,
    private token: TokenStorageService,
    private interactionService: InteractionService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.getPendingCarryforwardRequest();
  }

  getPendingCarryforwardRequest() {
    this.carryforwardLeaveRequestService.getPendingCarryforwardLeaveRequest().subscribe(data => {
      this.carryforwardLeave = data;
      this.dataSource = new MatTableDataSource<CarryforwardRequestData>(this.carryforwardLeave);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    );
  }

  sendCarryforward(carryforward) {
    this.interactionService.sendCarryforward(carryforward);
  }

  sendSuccessMessage() {
    this.interactionService.upadateMsg("CarryforwardRequestAccepted");
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
