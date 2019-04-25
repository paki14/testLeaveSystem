import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelfServiceService } from 'src/app/services/self-service/self-service.service';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { SelfService } from 'src/app/models/self-service/self-service';
import { ResponseService } from 'src/app/services/self-service/response.service';
import { Response } from 'src/app/models/self-service/response';
import { InteractionService } from 'src/app/services/interaction.service';



@Component({
  selector: 'app-view-response',
  templateUrl: './view-response.component.html',
  styleUrls: ['./view-response.component.css']
})
export class ViewResponseComponent implements OnInit {
  selfService:SelfService[];
  selfServiceObj = new SelfService();

  dataSource = new MatTableDataSource<SelfService>();
  displayedColumns: string[] = ['fullName','createdAt','selfServiceTypeName','status','description','responseview'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private responseService:ResponseService, private selfServiceService:SelfServiceService, private interactionService: InteractionService) { }
  ngOnInit() {

    this.selfServiceService.getAllSelfService().subscribe(data => {
      this.dataSource.data = data;
    });

    this.dataSource = new MatTableDataSource<any>(this.selfService);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getSelfServiceById(selfService) {
    this.selfServiceObj = selfService;
    console.log(this.selfServiceObj);
  }

  sendResponse(response){
    this.interactionService.sendResponseService(response);
    console.log(response);
  }

}

