import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ViewBenefitsAllowancesService } from '../../Service/view-benefits-allowances.service';
import { ViewBenefitsAllowances } from '../../Model/view-benefits-allowances';

@Component({
  selector: 'app-view-allowances',
  templateUrl: './view-allowances.component.html',
  styleUrls: ['./view-allowances.component.css']
})
export class ViewAllowancesComponent implements OnInit {
viewBenifitsAllownace:ViewBenefitsAllowances[];
  dataSource = new MatTableDataSource<ViewBenefitsAllowances>();
  displayedColumns: string[] = ['id','name','deptName', 'travelling','meal','housing','mobile','medical'];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private viewBenefitsAllowancesService:ViewBenefitsAllowancesService ) { }

  ngOnInit() {
    this.getBenefitsAllowances();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getBenefitsAllowances() {
    this.viewBenefitsAllowancesService.getBenefitsAllowances().subscribe(data=>{
      this.dataSource.data=data;
      console.log(data)
          });
          
          this.dataSource = new MatTableDataSource<any>(this.viewBenifitsAllownace);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
  }

  getBenefitsAllowancesSearchByName(name) {
    if (name != null) {
      this.viewBenefitsAllowancesService.getBenefitsAllowancesSearchByName(name).subscribe(data => {
        this.dataSource.data = data;
      });
      this.dataSource = new MatTableDataSource<any>(this.viewBenifitsAllownace);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

}
