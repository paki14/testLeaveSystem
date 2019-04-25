import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
@Component({
  selector: 'app-view-record-posting',
  templateUrl: './view-record-posting.component.html',
  styleUrls: ['./view-record-posting.component.css']
})
export class ViewRecordPostingComponent implements OnInit {

 

  displayedColumns: string[] = ['r_name', 'r_no','r_profile','r_location','r_track','r_status', 'r_edit','r_delete'];

  posting = [
    { 'r_name':'name1', 'r_no':'1','r_profile':'abc.html','r_location':'abc','r_track':'abc','r_status':'pqr','r_edit':'Edit','r_delete':'Delete'}
  
  ]
  dataSource = new MatTableDataSource<any>(this.posting);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.posting);
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


