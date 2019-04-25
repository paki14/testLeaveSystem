import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-promotion-eligibility-credit-check',
  templateUrl: './promotion-eligibility-credit-check.component.html',
  styleUrls: ['./promotion-eligibility-credit-check.component.css']
})
export class PromotionEligibilityCreditCheckComponent implements OnInit {
  displayedColumns: string[] = ['qualification', 'par','leavehist','YofStayComp','YofExperience'];

  Creditcheck = [
    { 'qualification': 'ALL', 'par': 'Manager' ,'leavehist':'leave','YofStayComp':'5','YofExperience':'5'}
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
