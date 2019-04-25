import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-view-interview-panel',
  templateUrl: './view-interview-panel.component.html',
  styleUrls: ['./view-interview-panel.component.css']
})
export class ViewInterviewPanelComponent implements OnInit {

 
  displayedColumns: string[] =['nameofevent', 'budjet','dateofevent2','dateofevent3','dateofevent4','dateofevent5','benificiaries','delete'];

  viewwelfare = [
    { 'nameofevent':'AA', 'budjet':'1CR' ,'dateofevent2':'10-08-2018','dateofevent3':'10-08-2018','dateofevent4':'10-08-2018','dateofevent5':'10-08-2018','benificiaries':'AA1','delete':'delete'}
   
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

