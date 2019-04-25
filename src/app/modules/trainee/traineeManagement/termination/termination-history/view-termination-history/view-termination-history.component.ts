import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-view-termination-history',
  templateUrl: './view-termination-history.component.html',
  styleUrls: ['./view-termination-history.component.css']
})
export class ViewTerminationHistoryComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nameOfTheTrainee','joinedDate','madeOfTermination','reasonForTermination','lastDate','edit','delete'];

  terminationHistoryDetails = [
    {'id':'1', 'nameOfTheTrainee':'Sobi','joinedDate':'2018/10/12','madeOfTermination':'2018/10/13','reasonForTermination':'Wedding','lastDate':'2018/10/15','edit':'edit','delete':'delete'},
    {'id':'2', 'nameOfTheTrainee':'Sobi','joinedDate':'2018/10/12','madeOfTermination':'2018/10/13','reasonForTermination':'Wedding','lastDate':'2018/10/15','edit':'edit','delete':'delete'},
    {'id':'3', 'nameOfTheTrainee':'Sobi','joinedDate':'2018/10/12','madeOfTermination':'2018/10/13','reasonForTermination':'Wedding','lastDate':'2018/10/15','edit':'edit','delete':'delete'},
    {'id':'4', 'nameOfTheTrainee':'Sobi','joinedDate':'2018/10/12','madeOfTermination':'2018/10/13','reasonForTermination':'Wedding','lastDate':'2018/10/15','edit':'edit','delete':'delete'},
    {'id':'5', 'nameOfTheTrainee':'Sobi','joinedDate':'2018/10/12','madeOfTermination':'2018/10/13','reasonForTermination':'Wedding','lastDate':'2018/10/15','edit':'edit','delete':'delete'},
    {'id':'6', 'nameOfTheTrainee':'Sobi','joinedDate':'2018/10/12','madeOfTermination':'2018/10/13','reasonForTermination':'Wedding','lastDate':'2018/10/15','edit':'edit','delete':'delete'}
  ]

  dataSource = new MatTableDataSource<any>(this.terminationHistoryDetails);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.terminationHistoryDetails);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
