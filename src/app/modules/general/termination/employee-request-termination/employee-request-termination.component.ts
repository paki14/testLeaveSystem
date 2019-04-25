import { Component, OnInit } from '@angular/core';
import { RequestTermination } from 'src/app/models/employee-termination/request-termination';
import { RequestTerminationService } from 'src/app/services/employee-termination/request-termination.service';

import { TerminationTypeService } from 'src/app/services/employee-termination/termination-type.service';
import { TerminationType } from 'src/app/models/employee-termination/termination-type';



@Component({
  selector: 'app-employee-request-termination',
  templateUrl: './employee-request-termination.component.html',
  styleUrls: ['./employee-request-termination.component.css']
})
export class EmployeeRequestTerminationComponent implements OnInit {
  requestTerminationObj = new RequestTermination();
  requestTermination : RequestTermination[];
  msg: any;
  terminationTypes: TerminationType[];
  

  constructor(private requestTerminationService : RequestTerminationService , 
    private terminationTypeService: TerminationTypeService) { }

  ngOnInit() {
    this.getRequestTermination();
    this.getTerminationType();
  }

  getRequestTermination() {
    this.requestTerminationService.getRequestTermination().subscribe(data => {
      this.requestTermination = data;
      console.log(data);
    });
  }

  getTerminationType(){
    this.terminationTypeService.getTerminationType().subscribe(data => {
      this.terminationTypes = data;
      console.log(data);
    });

  }

  createRequestTermination() {
    this.requestTerminationObj.employee.id = 1;
    this.requestTerminationService.createRequestTermination(this.requestTerminationObj).subscribe(data => {
      console.log(data);
      this.getRequestTermination();
    });
  }
  

}
