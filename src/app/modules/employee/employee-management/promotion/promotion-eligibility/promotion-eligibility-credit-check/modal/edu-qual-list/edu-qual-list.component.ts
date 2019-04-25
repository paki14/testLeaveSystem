import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-edu-qual-list',
  templateUrl: './edu-qual-list.component.html',
  styleUrls: ['./edu-qual-list.component.css']
})
export class EduQualListComponent implements OnInit {

  displayedColumns: string[] = ['qualification', 'place', 'qualdate', 'qualgrade'];

  Creditcheck = [
    { 'qualification': 'Qual1', 'place': 'Place1', 'qualdate': '22/04/2010', 'qualgrade': 'Grade1' },
    { 'qualification': 'Qual2', 'place': 'Place2', 'qualdate': '22/04/2011', 'qualgrade': 'Grade2' },
    { 'qualification': 'Qual3', 'place': 'Place3', 'qualdate': '22/04/2012', 'qualgrade': 'Grade3' }
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
