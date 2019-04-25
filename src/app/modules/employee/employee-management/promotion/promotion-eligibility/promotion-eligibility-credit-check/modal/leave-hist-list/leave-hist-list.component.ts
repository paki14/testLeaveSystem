import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-leave-hist-list',
  templateUrl: './leave-hist-list.component.html',
  styleUrls: ['./leave-hist-list.component.css']
})
export class LeaveHistListComponent implements OnInit {

  displayedColumns: string[] = ['levtype', 'levdate', 'levdays'];

  Creditcheck = [
    { 'levtype': 'leave1',  'levdate': '22/08/2018', 'levdays': '7' },
    { 'levtype': 'leave2',  'levdate': '22/09/2018', 'levdays': '8' },
    { 'levtype': 'leave3',  'levdate': '22/10/2018', 'levdays': '10' }
  ]
  dataSource = new MatTableDataSource<any>(this.Creditcheck);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.Creditcheck);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
}
