

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { RecruitmentType } from '../Modal/recruitment-type';
import { RecruitmentTypeService } from '../Service/recruitment-type.service';

@Component({
  selector: 'app-view-recruitment-type',
  templateUrl: './view-recruitment-type.component.html',
  styleUrls: ['./view-recruitment-type.component.css']
})
export class ViewRecruitmentTypeComponent implements OnInit {
  recruitmentTypeObj: RecruitmentType = new RecruitmentType();
  recruitmentType :RecruitmentType[];
msg:any;


  displayedColumns: string[] = ['r_id','r_type','r_button'];
recruitment:any;

 
  dataSource = new MatTableDataSource<any>(this.recruitment);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private recruitmentTypeService:RecruitmentTypeService) { }

  ngOnInit() {
    
    this.getAllRecruitmentType()
  }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }


  getAllRecruitmentType() {
    this.recruitmentTypeService.getAllRecruitmentType().subscribe(data => {
    this.recruitment = data;
    this.dataSource = new MatTableDataSource<any>(this.recruitment);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(data);
    });
}
editRecruitmentType(recruitmentType) {
  console.log(recruitmentType);
  this.recruitmentTypeObj = Object.assign({},recruitmentType);
}


updateRecruitmentTypeById() {
  this.recruitmentTypeService.updateRecruitmentType(this.recruitmentTypeObj).subscribe(data => {
   // alert("District Updated Sucessfully");
    this.getAllRecruitmentType();
  });
}
deleteRecruitmentTypeById(recruitmentType) {
  console.log(recruitmentType);
  this.recruitmentTypeService.deleteRecruitmentType(recruitmentType).subscribe(data => {
    
    this.getAllRecruitmentType();
   
  });
}
}