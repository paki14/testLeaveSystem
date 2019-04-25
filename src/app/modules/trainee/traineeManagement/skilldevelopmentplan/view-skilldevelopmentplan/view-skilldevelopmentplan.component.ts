import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-view-skilldevelopmentplan',
  templateUrl: './view-skilldevelopmentplan.component.html',
  styleUrls: ['./view-skilldevelopmentplan.component.css']
})
export class ViewSkilldevelopmentplanComponent implements OnInit {

  displayedColumns: string[] = ['plans', 'status','edit/delete'];
  sdp = [
    { 'plans':'WSO2', 'status':'Plan','edit/delete':'' },
    { 'plans':'Automation Exam', 'status':'1st Year completion','edit/delete':'' },
    { 'plans':'Project Management', 'status':'2nd Year completion','edit/delete':''},
    { 'plans':'Communication skills', 'status':'Failed','edit/delete':''}
  ]
  dataSource = new MatTableDataSource<any>(this.sdp);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.sdp);
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
