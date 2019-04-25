import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-individual-welfare-employee-view',
  templateUrl: './individual-welfare-employee-view.component.html',
  styleUrls: ['./individual-welfare-employee-view.component.css']
})
export class IndividualWelfareEmployeeViewComponent implements OnInit {

  
  displayedColumns: string[] = ['name','allowance','amount','date'];

  individualwelfare = [
    { 'name':'John', 'allowance':'Medical Allowance','amount':'5000','date':'25.09.2018'},
    
    
  ]
  dataSource = new MatTableDataSource<any>(this.individualwelfare);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.individualwelfare);
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
