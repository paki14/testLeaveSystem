import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HrViewSalaryDetails } from '../../Model/hr-view-salary-details';
import { HrViewSalaryDetailsService } from '../../Service/hr-view-salary-details.service';

@Component({
  selector: 'app-hr-salary-view',
  templateUrl: './hr-salary-view.component.html',
  styleUrls: ['./hr-salary-view.component.css']
})
export class HrSalaryViewComponent implements OnInit {

  dataSource = new HrViewSalaryDetailsDataSource(this.hrViewSalaryDetailsService);
  displayedColumns: string[] = ['id', 'empName', 'appointmentDate', 'basicSalary', 'increment', 'deductions', 'allowances', 'statutoryPayment', 'netSalary'];

  constructor(private hrViewSalaryDetailsService: HrViewSalaryDetailsService) { }


  ngOnInit() {

  }

}
export class HrViewSalaryDetailsDataSource extends DataSource<any>{
  constructor(private hrViewSalaryDetailsService: HrViewSalaryDetailsService) {
    super();
  }
  connect(): Observable<HrViewSalaryDetails[]> {
    return this.hrViewSalaryDetailsService.getHrViewSalaryDetails();
  }
  disconnect() { }
}



