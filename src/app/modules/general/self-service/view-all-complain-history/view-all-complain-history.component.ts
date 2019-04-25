import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelfServiceService } from 'src/app/services/self-service/self-service.service';
import { DataSource } from '@angular/cdk/table';
import { SelfServiceUser } from 'src/app/models/self-service/self-service-user';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-view-all-complain-history',
  templateUrl: './view-all-complain-history.component.html',
  styleUrls: ['./view-all-complain-history.component.css']
})
export class ViewAllComplainHistoryComponent implements OnInit {


  dataSource = new SelfServiceUserDataSource(this.selfServiceService)
  displayedColumns: string[] = ['fullName','date','selfServiceTypeName','status','description'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private selfServiceService:SelfServiceService) { }

  ngOnInit() {
    // this.dataSource = new SelfServiceUserDataSource<any>(this.selfServiceService);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

  }
export class SelfServiceUserDataSource extends DataSource<any>{
  constructor(private selfServiceService:SelfServiceService){
    super();
  }
  connect():Observable<SelfServiceUser[]>{
    return this.selfServiceService.getSelfService();
  }
  disconnect(){}
}
