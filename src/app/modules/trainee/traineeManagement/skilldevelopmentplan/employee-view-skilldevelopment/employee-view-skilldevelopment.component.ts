import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-employee-view-skilldevelopment',
  templateUrl: './employee-view-skilldevelopment.component.html',
  styleUrls: ['./employee-view-skilldevelopment.component.css']
})
export class EmployeeViewSkilldevelopmentComponent implements OnInit {

  displayedColumns: string[] = ['plans', 'status','edit/delete'];
  cdp = [
    { 'plans':'WSO2', 'status':'Plan','edit/delete':'' },
    { 'plans':'Automation Exam', 'status':'1st Year completion','edit/delete':'' },
    { 'plans':'Project Management', 'status':'2nd Year completion','edit/delete':''},
    { 'plans':'Communication skills', 'status':'Failed','edit/delete':''}
  ]
  dataSource = new MatTableDataSource<any>(this.cdp);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.cdp);
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
