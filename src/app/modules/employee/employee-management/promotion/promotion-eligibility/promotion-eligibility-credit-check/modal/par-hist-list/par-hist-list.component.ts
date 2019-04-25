import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-par-hist-list',
  templateUrl: './par-hist-list.component.html',
  styleUrls: ['./par-hist-list.component.css']
})
export class ParHistListComponent implements OnInit {

  displayedColumns: string[] = ['pararea', 'pardate', 'parrate','remark'];

  Creditcheck = [
    { 'pararea': 'leave1',  'pardate': '22/08/2018', 'parrate': '7','remark':'Good' },
    { 'pararea': 'leave2',  'pardate': '22/09/2018', 'parrate': '8' ,'remark':'Best'},
    { 'pararea': 'leave3',  'pardate': '22/10/2018', 'parrate': '10','remark':'Better' }
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
