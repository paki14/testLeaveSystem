import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-view-record-posting-preference',
  templateUrl: './view-record-posting-preference.component.html',
  styleUrls: ['./view-record-posting-preference.component.css']
})
export class ViewRecordPostingPreferenceComponent implements OnInit {
  displayedColumns: string[] = ['t_name', 'p_link', 'performing_track', 'trainee_preference', 'fpar_score', 'edit', 'delete']

  schedule = [
   { 't_name':'hrm', 'p_link':'Manager', 'performing_track':'14-9-2018', 'trainee_preference':'dfgh', 'fpar_score':'tgyu', 'edit':'Edit', 'delete':'Delete'}
   
 ]
 dataSource = new MatTableDataSource<any>(this.schedule);


 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.schedule);
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




 


 

 
