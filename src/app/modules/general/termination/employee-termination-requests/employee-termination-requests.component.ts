import { Component, OnInit } from '@angular/core';
import { RequestTermination } from 'src/app/models/employee-termination/request-termination';
import { RequestTerminationService } from 'src/app/services/employee-termination/request-termination.service';



@Component({
  selector: 'app-employee-termination-requests',
  templateUrl: './employee-termination-requests.component.html',
  styleUrls: ['./employee-termination-requests.component.css']
})
export class EmployeeTerminationRequestsComponent implements OnInit {   
  terminationRequest : RequestTermination[];
  msg : any;
  constructor(private terminationrequestService:RequestTerminationService  ) { }

  ngOnInit() {
    this.getPendingTerminaionRequest();    
  }
  getPendingTerminaionRequest() {
    this.terminationrequestService.getPendingRequestTermination().subscribe(data => {
      this.terminationRequest = data;
      console.log(data);
    });
  }
}
