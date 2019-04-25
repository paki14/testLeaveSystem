import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { WelfareEvent } from '../Model/welfare-event';
import { WelfareEventService } from '../Service/welfare-event.service';

@Component({
  selector: 'app-view-welfare-event',
  templateUrl: './view-welfare-event.component.html',
  styleUrls: ['./view-welfare-event.component.css']
})
export class ViewWelfareEventComponent implements OnInit {
  welfareEventObj: WelfareEvent = new WelfareEvent();
  welfareEvent: WelfareEvent[];
  msg: any;
  displayedColumns: string[] = ['nameofevent', 'budjet', 'status', 'dateofevent', 'delete'];
  welEvent: any;
  dataSource = new MatTableDataSource<any>(this.welEvent);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private welfareEventService: WelfareEventService) { }

  ngOnInit() {
    this.getAllWelfareEvent()
  }

  getAllWelfareEvent() {
    this.welfareEventService.getAllWelfareEvent().subscribe(data => {
      this.welEvent = data;
      this.dataSource = new MatTableDataSource<any>(this.welEvent);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      //  console.log(data);
    });
  }


  // addWelfareEvent(){
  //   this.welfareEventService.createWelfareEvent(this.welfareEventObj).subscribe(data=>{
  // alert("welfare Event added");
  //   });

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editWelfareEvent(welfareEvent) {
    //  console.log(welfareEvent);
    this.welfareEventObj = Object.assign({}, welfareEvent);
  }


  updateWelfareEvent() {
    this.welfareEventService.updateWelfareEvent(this.welfareEventObj).subscribe(data => {
      // alert("District Updated Sucessfully");
      this.getAllWelfareEvent();
    });
  }
  deleteWelfareEventById(welfareEvent) {
    console.log(welfareEvent);
    this.welfareEventService.deleteWelfareEvent(welfareEvent).subscribe(data => {

      this.getAllWelfareEvent();

    });
  }


}