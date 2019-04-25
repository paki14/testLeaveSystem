import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-welfare-usage-history',
  templateUrl: './welfare-usage-history.component.html',
  styleUrls: ['./welfare-usage-history.component.css']
})
export class WelfareUsageHistoryComponent implements OnInit {

  displayedColumns: string[] = ['nameofemployee', 'empnum','usagesumm','date','edit/delete'];

  viewwelfare = [
    { 'nameofemployee':'emp1', 'empnum':'001' ,'usagesumm':'summ1','date':'10-08-2018','edit/delete':'' },
    { 'nameofemployee':'emp2', 'empnum':'002' ,'usagesumm':'summ2','date':'10-09-2018','edit/delete':'' },
    { 'nameofemployee':'emp3', 'empnum':'003' ,'usagesumm':'summ3','date':'10-10-2018','edit/delete':'' },
    { 'nameofemployee':'emp4', 'empnum':'004' ,'usagesumm':'summ4','date':'10-11-2018','edit/delete':'' },
    { 'nameofemployee':'emp5', 'empnum':'005' ,'usagesumm':'summ5','date':'10-12-2018','edit/delete':'' }
    
  ]
  dataSource = new MatTableDataSource<any>(this.viewwelfare);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.viewwelfare);
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
