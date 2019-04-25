import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-view-interview-history',
  templateUrl: './view-interview-history.component.html',
  styleUrls: ['./view-interview-history.component.css']
})
export class ViewInterviewHistoryComponent implements OnInit {

 
  displayedColumns: string[] = ['nameofevent', 'budjet','benificiaries','dateofevent','dateofevent1','edit','delete'];

  viewwelfare = [
    { 'nameofevent':'AA', 'budjet':'1CR' ,'benificiaries':'AA1','dateofevent':'10-08-2018','dateofevent1':'10-08-2018','edit':'edit','delete':'delete'}
   
  ]
  dataSource = new MatTableDataSource<any>(this.viewwelfare);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.viewwelfare);
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

