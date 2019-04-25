import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-view-pre-request',
  templateUrl: './view-pre-request.component.html',
  styleUrls: ['./view-pre-request.component.css']
})
export class ViewPreRequestComponent implements OnInit {
  displayedColumns: string[] = ['trainerName', 'trainingTopic','TrainingDate', 'RequiredResource','resource'];

  termination = [
    { 'trainerName':'Trainer', 'trainingTopic':'Automation','TrainingDate':'12/4/2011',
     'RequiredResource':'Selenium','resource':'file'},
    { 'trainerName':'Trainer', 'trainingTopic':'Automation','TrainingDate':'12/4/2011', 
    'RequiredResource':'Selenium','resource':'file' },
   ]
  dataSource = new MatTableDataSource<any>(this.termination);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.termination);
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