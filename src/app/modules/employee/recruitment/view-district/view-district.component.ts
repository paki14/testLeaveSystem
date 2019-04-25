

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { District } from '../Modal/district';
import { DistrictService } from '../Service/district.service';

@Component({
  selector: 'app-view-district',
  templateUrl: './view-district.component.html',
  styleUrls: ['./view-district.component.css']
})
export class ViewDistrictComponent implements OnInit {
  districtObj: District = new District();
  district: District[];
  
  msg:any;
  displayedColumns: string[] = ['d_id','d_name','d_button'];
 
 
  dataSource = new MatTableDataSource<any>(this.district);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private districtService:DistrictService) { }

  ngOnInit() {
    this.getAllDistrict()
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllDistrict() {
    this.districtService.getAllDistrict().subscribe(data => {
    this.district = data;
    this.dataSource = new MatTableDataSource<any>(this.district);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(data);
    });
}
editDistrict(district) {
  console.log(district);
  this.districtObj = Object.assign({}, district);
}


updateDistrictById() {
  this.districtService.updateDistrict(this.districtObj).subscribe(data => {
   // alert("District Updated Sucessfully");
    this.getAllDistrict();
  });
}
deleteDistrictById(district) {
  console.log(district);
  this.districtService.deleteDistrict(district).subscribe(data => {
    
    this.getAllDistrict();
   
  });
}

}