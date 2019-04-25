import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-view-final-assesment-score',
  templateUrl: './view-final-assesment-score.component.html',
  styleUrls: ['./view-final-assesment-score.component.css']
})
export class ViewFinalAssesmentScoreComponent implements OnInit {

  displayedColumns: string[] = ['traineenum','traineename', 'matricesmeasured','relevantscromatrics','finalscore','remarks','edit/delete'];

  finalassesment = [
    { 'traineenum':'1', 'traineename':'aa' ,'matricesmeasured':'m1','relevantscromatrics':'s1','finalscore':'3','remarks':'r1','edit/delete':''},
    { 'traineenum':'2', 'traineename':'bb' ,'matricesmeasured':'m2','relevantscromatrics':'s2','finalscore':'6','remarks':'r2','edit/delete':''},
    { 'traineenum':'3', 'traineename':'cc' ,'matricesmeasured':'m3','relevantscromatrics':'s3','finalscore':'2','remarks':'r3','edit/delete':''},
    { 'traineenum':'4', 'traineename':'dd' ,'matricesmeasured':'m4','relevantscromatrics':'s4','finalscore':'5','remarks':'r4','edit/delete':''},
    { 'traineenum':'5', 'traineename':'ee' ,'matricesmeasured':'m5','relevantscromatrics':'s5','finalscore':'4','remarks':'r5','edit/delete':''}
    
  ]
  
  dataSource = new MatTableDataSource<any>(this.finalassesment);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.finalassesment);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
}
