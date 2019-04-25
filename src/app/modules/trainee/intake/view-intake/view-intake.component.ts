import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-view-intake',
  templateUrl: './view-intake.component.html',
  styleUrls: ['./view-intake.component.css']
})
export class ViewIntakeComponent implements OnInit {

  displayedColumns: string[] = ['batNo','title','slot', 'duration','schedule','bas_qul','exp_qul','inquire','ap_call','ap_dead','reg_ap','sel_ap','edit','delete'];

  appoinments = [
    { 'batNo':'1', 'title':'Harry','slot':'HR', 'duration':'HR', 'schedule' :'test1', 'bas_qul':'1561', 'exp_qul':'jhbj', 'inquire':'15414','ap_call':'12/12/2012','ap_dead':'10/10/2013','reg_ap':'30','sel_ap':'12','edit':'edit','delete':'delete'},
    { 'batNo':'1', 'title':'Harry','slot':'HR', 'duration':'HR', 'schedule' :'test1', 'bas_qul':'1561', 'exp_qul':'jhbj', 'inquire':'15414','ap_call':'12/12/2012','ap_dead':'10/10/2013','reg_ap':'30','sel_ap':'12','edit':'edit','delete':'delete'},
    { 'batNo':'1', 'title':'Harry','slot':'HR', 'duration':'HR', 'schedule' :'test1', 'bas_qul':'1561', 'exp_qul':'jhbj', 'inquire':'15414','ap_call':'12/12/2012','ap_dead':'10/10/2013','reg_ap':'30','sel_ap':'12','edit':'edit','delete':'delete'},
    { 'batNo':'1', 'title':'Harry','slot':'HR', 'duration':'HR', 'schedule' :'test1', 'bas_qul':'1561', 'exp_qul':'jhbj', 'inquire':'15414','ap_call':'12/12/2012','ap_dead':'10/10/2013','reg_ap':'30','sel_ap':'12','edit':'edit','delete':'delete'},
    { 'batNo':'1', 'title':'Harry','slot':'HR', 'duration':'HR', 'schedule' :'test1', 'bas_qul':'1561', 'exp_qul':'jhbj', 'inquire':'15414','ap_call':'12/12/2012','ap_dead':'10/10/2013','reg_ap':'30','sel_ap':'12','edit':'edit','delete':'delete'},
    { 'batNo':'1', 'title':'Harry','slot':'HR', 'duration':'HR', 'schedule' :'test1', 'bas_qul':'1561', 'exp_qul':'jhbj', 'inquire':'15414','ap_call':'12/12/2012','ap_dead':'10/10/2013','reg_ap':'30','sel_ap':'12','edit':'edit','delete':'delete'}
  ]
  dataSource = new MatTableDataSource<any>(this.appoinments);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.appoinments);
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
