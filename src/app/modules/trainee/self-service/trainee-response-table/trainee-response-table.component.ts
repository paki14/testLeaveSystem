import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';


@Component({
  selector: 'app-trainee-response-table',
  templateUrl: './trainee-response-table.component.html',
  styleUrls: ['./trainee-response-table.component.css']
})
export class TraineeResponseTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'empName', 'date', 'type', 'department', 'description', 'responseview'];

  response = [
    { 'id': '1', 'empName': 'Test1', 'date': '12/1/2018', 'type': 'Request', 'department': 'CS', 'description': 'test', "responseview": "Response" },
    { 'id': '2', 'empName': 'Manager', 'date': '12/1/2018', 'type': 'Complain', 'department': 'CSE', 'description': 'test2', "responseview": "Response" }

  ]
  dataSource = new MatTableDataSource<any>(this.response);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.response);
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
