import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-view-interview-panel-form',
  templateUrl: './view-interview-panel-form.component.html',
  styleUrls: ['./view-interview-panel-form.component.css']
})
export class ViewInterviewPanelFormComponent implements OnInit {

 
  displayedColumns: string[] = ['id', 'position','department','jobdescription'];

  appoinments = [
    { 'id':'1', 'position':'Manager', 'department':'HR', 'jobdescription' :'test1'}
   
  ]
  dataSource = new MatTableDataSource<any>(this.appoinments);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.appoinments);
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

