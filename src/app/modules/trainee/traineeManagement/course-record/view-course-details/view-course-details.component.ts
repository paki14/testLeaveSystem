import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-view-course-details',
  templateUrl: './view-course-details.component.html',
  styleUrls: ['./view-course-details.component.css']
})
export class ViewCourseDetailsComponent implements OnInit {
  displayedColumns: string[] = ['moduleRef', 'title','creditValue','hours','grade'];

  viewCou = [
    { 'moduleRef':'1', 'title':'Spring Boot', 'creditValue':'120', 'hours' :'25', 'grade':'A'},
    { 'moduleRef':'2', 'title':'Angular', 'creditValue':'40', 'hours' :'20', 'grade':'B'},
    { 'moduleRef':'3', 'title':'Servlet', 'creditValue':'60', 'hours' :'30', 'grade':'C'},
    { 'moduleRef':'4', 'title':'QA', 'creditValue':'90', 'hours' :'35', 'grade':'D'} 
  ]
  dataSource = new MatTableDataSource<any>(this.viewCou);
  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.viewCou);
  }
}
