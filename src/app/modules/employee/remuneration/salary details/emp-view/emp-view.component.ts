import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { TokenStorageService } from '../../../../../services/login/token-storage.service';
import { HrViewSalaryDetails } from '../../Model/hr-view-salary-details';
import { EmpViewsalaryDetailsService } from '../../Service/emp-viewsalary-details.service';

@Component({
  selector: 'app-emp-view',
  templateUrl: './emp-view.component.html',
  styleUrls: ['./emp-view.component.css']
})
export class EmpViewComponent implements OnInit {
  
  displayedColumns: string[] = ['employeeId', 'employeename','dateofappoinment','basicsalary','increment','deductions','allowances','statutorypayment','netsalary'];


info : any;
hrViewSalaryDetails : HrViewSalaryDetails[];
dataSource = new MatTableDataSource<HrViewSalaryDetails>();
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
  constructor(private token : TokenStorageService, private empViewsalaryDetailsService:EmpViewsalaryDetailsService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()

    };

    this.empViewsalaryDetailsService.getempViewSalaryDetails(this.info.username).subscribe(data => {
      this.hrViewSalaryDetails = data;
      console.log(data);
      this.dataSource = new MatTableDataSource<any>(this.hrViewSalaryDetails);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  // console.log(this.userLoandetail);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

