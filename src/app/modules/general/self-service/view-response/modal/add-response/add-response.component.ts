import { Component, OnInit } from '@angular/core';
import { ResponseService } from 'src/app/services/self-service/response.service';
import { Response } from 'src/app/models/self-service/response';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-add-response',
  templateUrl: './add-response.component.html',
  styleUrls: ['./add-response.component.css']
})
export class AddResponseComponent implements OnInit {

  constructor(private responseService:ResponseService, private interactionService: InteractionService) { }
 
  responseObj=new Response();
  msg:any;
  ngOnInit() {
    this.getResponse();
  }
  createResponse() {
    this.responseService.createResponse(this.responseObj).subscribe(data=>{
      console.log(data);
    })
  }
  sendResponseObjToAccept() {
    console.log(this.responseObj);
    this.responseService.createResponse(this.responseObj).subscribe(data => {
    })
  }

  getResponse(){
    this.interactionService.responseDataSource$.subscribe(data => {
      this.responseObj = data;
    })
  }
}
