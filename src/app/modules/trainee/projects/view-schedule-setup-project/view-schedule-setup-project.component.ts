import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-view-schedule-setup-project',
  templateUrl: './view-schedule-setup-project.component.html',
  styleUrls: ['./view-schedule-setup-project.component.css']
})
export class ViewScheduleSetupProjectComponent implements OnInit {

  
 displayedColumns: string[] = ['p_name', 'm_name', 'dead', 'milestone', 'gantt', 'edit', 'delete']

 schedule = [
   { 'p_name':'hrm', 'm_name':'Manager', 'dead':'14-9-2018', 'milestone':'abc', 'gantt':'def', 'edit':'Edit', 'delete':'Delete'}
   
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
