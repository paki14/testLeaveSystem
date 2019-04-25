import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-trainee-view-details',
  templateUrl: './trainee-view-details.component.html',
  styleUrls: ['./trainee-view-details.component.css']
})
export class TraineeViewDetailsComponent implements OnInit {

  displayedColumns: string[] = ['emp-id','ftname','appoinmentDate','nic','permanent-address','mobile','email'];

  viewTrainee = [
    {'emp-id':'001','ftname':'Jeni', 'appoinmentDate':"2018/02/24",'nic':'895678452V','permanent-address':"Colombo",'mobile':"0775425842",'email':"test@ymail.com"},
    {'emp-id':'002','ftname':'Jeni', 'appoinmentDate':"2018/02/24",'nic':"895678452V",'permanent-address':"Colombo",'mobile':"0775425842",'email':"test@ymail.com"},

  ]

  dataSource = new MatTableDataSource<any>(this.viewTrainee);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.viewTrainee);
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
