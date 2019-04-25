import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Availability } from 'src/app/modules/trainer/Model/availability';
import { AvailabilityService } from 'src/app/modules/trainer/Service/availability.service';

@Component({
  selector: 'app-view-availability',
  templateUrl: './view-availability.component.html',
  styleUrls: ['./view-availability.component.css']
})
export class ViewAvailabilityComponent implements OnInit {

  AvailabilityObj: Availability = new Availability();
  availability: any;
  

  displayedColumns: string[] = [ 'startdate','enddate','edit/delete'];

 
  dataSource = new MatTableDataSource<any>(this.availability);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  

  constructor(private availabilityService: AvailabilityService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllAvailability();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllAvailability() {
    this.availabilityService.getAllAvailability().subscribe(data => {
      this.availability = data;
      this.dataSource = new MatTableDataSource<any>(this.availability);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      //  console.log(data);
    });
  }

  editAvailability(data) {
   
    this.AvailabilityObj = Object.assign({}, data);
  }
  // getAcadamicId(data){
  //   this.academicQualObj=Object.assign({},data);
  //   // alert( this.academicQualObj.id)
  // }

  updateAvailability() {
    this.availabilityService.updateAvailability(this.AvailabilityObj).subscribe(data => {
      alert("availability Updated Sucessfully");
      this.getAllAvailability();
    });
  }
  deleteAvailability(availability) {
    
    this.availabilityService.deleteAvailability(this.AvailabilityObj).subscribe(data => {

      this.getAllAvailability();

    });
  }


}
