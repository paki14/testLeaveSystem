import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ViewEmpSalaryChartService } from '../../Service/view-emp-salary-chart.service';
import { ViewEmpSalaryChart } from '../../Model/view-emp-salary-chart';

@Component({
  selector: 'app-view-salary-chart',
  templateUrl: './view-salary-chart.component.html',
  styleUrls: ['./view-salary-chart.component.css']
})
export class ViewSalaryChartComponent implements OnInit {

  viewEmpSalaryChart: ViewEmpSalaryChart[];
  dataSource = new MatTableDataSource<ViewEmpSalaryChart>();
  displayedColumns: string[] = ['id', 'empName', 'basicSalary', 'epf8', 'loan', 'netSalary', 'payee', 'stampDuty', 'statutoryPayment'];
  displayedColumnsForEmployee: string[] = ['id', 'basicSalary', 'epf8', 'loan', 'netSalary', 'payee', 'stampDuty', 'statutoryPayment'];
  constructor(private viewEmpSalaryChartService: ViewEmpSalaryChartService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  name: String;
  role = "hr";

  ngOnInit() {
    this.getSalaryChart();

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getSalaryChart() {
    this.viewEmpSalaryChartService.getSalaryChart().subscribe(data => {
      this.dataSource.data = data;
    });
    this.dataSource = new MatTableDataSource<any>(this.viewEmpSalaryChart);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getSalaryChartByName(name) {
    if (name != null) {
      this.viewEmpSalaryChartService.getHrSalaryChartByName(name).subscribe(data => {
        this.dataSource.data = data;
      })
      this.dataSource = new MatTableDataSource<any>(this.viewEmpSalaryChart);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }
}
