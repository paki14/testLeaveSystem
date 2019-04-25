import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { UserLoanDetailsService } from '../../Service/user-loan-details.service';
import { UserLoanDetails } from '../../Model/user-loan-details';

@Component({
  selector: 'app-taken-view-by-hr',
  templateUrl: './taken-view-by-hr.component.html',
  styleUrls: ['./taken-view-by-hr.component.css']
})
export class TakenViewByHrComponent implements OnInit {
  name: string;


  getUserDetailsByName(name){
    this.userLoanDetailsService.getUserLoanDetailsByUserName(name).subscribe(
      data => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
      }
    );
  }
  userLoanDetails: UserLoanDetails[];
  dataSource = new MatTableDataSource<UserLoanDetails>();
  displayedColumns: string[] = ['user_id', 'user', 'dateOfLoanObtained', 'loanDetailsEntity', 'installmentDate', 'installmentAmount', 'redemptionDate'];

  constructor(private userLoanDetailsService: UserLoanDetailsService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngOnInit() {
    this.getUserDetails();
    this.dataSource = new MatTableDataSource<any>(this.userLoanDetails);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  getUserDetails() {
    this.userLoanDetailsService.getUserLoanDetails().subscribe(
      data => {
        this.dataSource.data = data;
        console.log(data);
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}