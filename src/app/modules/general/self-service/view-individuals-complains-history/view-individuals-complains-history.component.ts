import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { ResponseService } from 'src/app/services/self-service/response.service';
import { Response } from 'src/app/models/self-service/response';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';
import { SelfServiceService } from 'src/app/services/self-service/self-service.service';


@Component({
  selector: 'app-view-individuals-complains-history',
  templateUrl: './view-individuals-complains-history.component.html',
  styleUrls: ['./view-individuals-complains-history.component.css']
})
export class ViewIndividualsComplainsHistoryComponent implements OnInit {

  dataSource = new ResponseUserDataSource(this.responseService)
  displayedColumns: string[] = ['fullname', 'type','departmentName','createdAt','responseMessage'];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
info : any;
responceEntity: Response[];
  constructor(private responseService:ResponseService, private token : TokenStorageService, private selfServiceService: SelfServiceService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

    // this.selfServiceService.getSpecificDetails(this.info.username).subscribe(data=>{
    //   this.
    // })
  }

}
export class ResponseUserDataSource extends DataSource<any>{
  constructor(private responseService:ResponseService){
    super();
  }
  connect():Observable<Response[]>{
   return this.responseService.getResponse();
  }
  disconnect(){}
}
