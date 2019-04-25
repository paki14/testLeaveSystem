import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-attachment',
  templateUrl: './view-attachment.component.html',
  styleUrls: ['./view-attachment.component.css']
})



export class ViewAttachmentComponent implements OnInit {

  displayedColumns: string[] = ['attachment', 'original','copy'];

  checklist = [
    { 'attachment':'Job application' },
    { 'attachment':'Passport size photo'},
    { 'attachment':'Source of recruitment (attachment if any)' },
    { 'attachment':'Curriculum Vitae  '},
    { 'attachment':'NIC certified copy  '},
    { 'attachment':'Birth certificate'},
    { 'attachment':'Marriage certificate '},
    { 'attachment':'Job offer letter'},
    { 'attachment':'Job description '},
    { 'attachment':'Agreements and contracts '},
    { 'attachment':'Letter of job acknowledgement '},
    { 'attachment':'Proof of educational and professional qualifications '},
    { 'attachment':'Interview marks and results '},
    { 'attachment':'Medical report (medically fit for work) '},
    { 'attachment':'Salary, EPT, ETF and other details '},
    { 'attachment':'Pre-employment and appointment docs including offers of employment '},
    { 'attachment':'Forms relation to employee benefits '},
    { 'attachment':'Forms providing next of kin and emergency contacts '},
    { 'attachment':'Awards and citations of excellent performance '},
    { 'attachment':'Other letters and documents exchanged'}
  ]
  dataSource = new MatTableDataSource<any>(this.checklist);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route:Router) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.checklist);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  goBack(){
this.route.navigate(['/profile/rolesAndResponse'])
  }
}
