import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { LoanDetailsService } from '../../Service/loan-details.service';
import { LoanDetails } from '../../Model/loan-details';


@Component({
  selector: 'app-view-loan',
  templateUrl: './view-loan.component.html',
  styleUrls: ['./view-loan.component.css']
})
export class ViewLoanComponent implements OnInit {
   loanDetails:LoanDetails[];
  dataSource = new MatTableDataSource<LoanDetails>();
  displayedColumns: string[] = ['id','service_period','amount','intrest'];
  
   constructor( private loanDetailsService: LoanDetailsService) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngOnInit() {
    this.loanDetailsService.getLoanDetails().subscribe(
      data => {
        this.dataSource.data = data;
      }
    );
    this.dataSource = new MatTableDataSource<any>(this.loanDetails);
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
