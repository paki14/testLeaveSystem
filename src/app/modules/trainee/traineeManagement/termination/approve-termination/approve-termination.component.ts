import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-approve-termination',
  templateUrl: './approve-termination.component.html',
  styleUrls: ['./approve-termination.component.css']
})
export class ApproveTerminationComponent implements OnInit {

  displayedColumns: string[] = ['name', 'requestedDate','reason', 'accept'];

  Approvetermination = [
    { 'name':'siva', 'requestedDate':'11/2/2010','reason':'study',  },
    { 'name':'ravi', 'requestedDate':'10/2/2010','reason':'get job', },
    { 'name':'raja', 'requestedDate':'7/2/2010','reason':'get job', },
    { 'name':'vishal', 'requestedDate':'31/2/2010','reason':'get job', },
    { 'name':'vishnu', 'requestedDate':'12/2/2010','reason':'get job', },
    { 'name':'jeyam', 'requestedDate':'12/2/2010','reason':'get job', }    
  ]
  dataSource = new MatTableDataSource<any>(this.Approvetermination);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.Approvetermination);
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