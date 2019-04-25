import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-eligible-loan',
  templateUrl: './eligible-loan.component.html',
  styleUrls: ['./eligible-loan.component.css']
})
export class EligibleLoanComponent implements OnInit {
  displayedColumns: string[] = ['loanId', 'loanType','amount','apply'];

  eligibleloan = [
    { 'loanId':'1', 'loanType':'EmpLoan', 'amount':'1000000', 'apply':'apply' },
    { 'loanId':'2', 'loanType':'HRLoan', 'amount':'200000', 'apply' :'apply'},
    { 'loanId':'3', 'loanType':'ManagerLoan','amount':'500000','apply' :'apply'},
    { 'loanId':'4', 'loanType':'Manager', 'amount':'200000', 'apply' :'apply'},
    { 'loanId':'5', 'loanType':'Manager', 'amount':'300000', 'apply' :'apply'},
    { 'loanId':'6', 'loanType':'Manager', 'amount':'400000', 'apply' :'apply'},
    { 'loanId':'7', 'loanType':'Manager', 'amount':'600000', 'apply' :'apply'}
  ]
  dataSource = new MatTableDataSource<any>(this.eligibleloan);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.eligibleloan);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
