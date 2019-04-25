import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-par-filter-table',
  templateUrl: './par-filter-table.component.html',
  styleUrls: ['./par-filter-table.component.css']
})
export class ParFilterTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name','select'];

  parHistory = [
    {'id':'2','name':'ravi','select':''},
    {'id':'6','name':'jerom','select':''}
]

  
  dataSource = new MatTableDataSource<any>(this.parHistory);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.parHistory);
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
