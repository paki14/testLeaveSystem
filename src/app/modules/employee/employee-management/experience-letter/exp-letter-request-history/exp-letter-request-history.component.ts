import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { GenerateLetterService } from '../services/generate-letter.service';

@Component({
  selector: 'app-exp-letter-request-history',
  templateUrl: './exp-letter-request-history.component.html',
  styleUrls: ['./exp-letter-request-history.component.css']
})
export class ExpLetterRequestHistoryComponent implements OnInit {

  displayedColumns: string[] = ['id', 'empName','department','requestedDate','reason','status','issuedDate','provided'];

history=[];

  dataSource = new MatTableDataSource<any>(this.history);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private generateLetterService: GenerateLetterService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.history);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getGenerateLetter();

  }

  getGenerateLetter() {
    this.generateLetterService.getAllLetter().subscribe(data => {
      this.history = data;
      this.dataSource = new MatTableDataSource<any>(data);
      console.log(data);
      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
