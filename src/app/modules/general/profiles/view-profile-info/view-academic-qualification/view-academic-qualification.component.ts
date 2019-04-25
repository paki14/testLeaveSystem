import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { AccademicQualificationService } from './accademic-qualification.service';
import { AcademicQualification } from './academic-qualification';
import { ProfileInfoService } from '../profile-table/profile-info.service';
import { ExamTypeService } from '../../add-profile-info/add-academic-qualification/exam-type.service';
import { ExamType } from '../../add-profile-info/add-academic-qualification/exam-type.model';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';

@Component({
  selector: 'app-view-academic-qualification',
  templateUrl: './view-academic-qualification.component.html',
  styleUrls: ['./view-academic-qualification.component.css']
})

export class ViewAcademicQualificationComponent implements OnInit {

  academicQualifications: AcademicQualification[];
  academicQualObj = new AcademicQualification();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router,
    private academicService: AccademicQualificationService,
    private profileInfoService: ProfileInfoService,
    private examTypeService: ExamTypeService,
    private token: TokenStorageService) { }
  examtypes: ExamType[]
  UserId: Number;
  info: any
  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.profileInfoService.profileuserObservable$.subscribe(userid => {
      this.GetAcademicQualificationByUserId(userid);
      this.UserId = userid;
    })
    this.getExamTypeByid()
  }
  GetAcademicQualificationByUserId(uid) {
    return this.academicService.getAcademicQualificationByUserId(uid).subscribe(data => {
      console.log(data);
      this.academicQualifications = data;
    })
  }

  getExamTypeByid() {
    return this.examTypeService.viewExamtypes().subscribe(data => {
      console.log(data);
      this.examtypes = data
    })
  }
  // getAllAcademicQualification() {
  //   this.academicService.getAcademicQualification().subscribe(data => {
  //     this.academicQualifications = data;
  //   })
  // }
  getAcadamicId(data) {
    this.academicQualObj = Object.assign({}, data);
    // alert(this.academicQualObj.id)
  }
  editAcademicQualification(){
    this.academicQualObj.user=this.UserId;
    this.academicService.updateAcademicQualification(this.academicQualObj).subscribe(data=>{
      this.GetAcademicQualificationByUserId(this.UserId);
    })
  }
  deleteAcadamicQualification() {
    this.academicService.deleteAcademicQualificationa(this.academicQualObj).subscribe(data => {
      // alert(this.academicQualObj.id)
      this.GetAcademicQualificationByUserId(this.UserId)
    })
  }

  gotoNext() {
    this.router.navigate(['/profile/ProfQual']);
  }

  goBack() {
    this.router.navigate(['/profile/genInf']);
  }

}
