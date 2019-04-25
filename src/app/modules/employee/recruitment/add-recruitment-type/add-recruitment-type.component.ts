import { Component, OnInit } from '@angular/core';
import { RecruitmentTypeService } from '../Service/recruitment-type.service';
import { RecruitmentType } from '../Modal/recruitment-type';

@Component({
  selector: 'app-add-recruitment-type',
  templateUrl: './add-recruitment-type.component.html',
  styleUrls: ['./add-recruitment-type.component.css']
})
export class AddRecruitmentTypeComponent implements OnInit {

  recruitmentTypeObj: RecruitmentType = new RecruitmentType();
  recruitmentType: RecruitmentType[];
  constructor(private recruitmentTypeService: RecruitmentTypeService) { }

  ngOnInit() {
     this.getRecruitmentType()
  }
  getRecruitmentType() {
    this.recruitmentTypeService.getAllRecruitmentType().subscribe(data => {
      console.log(data);
      this.recruitmentType = data;
    });
  }
  createRecruitmentType() {
    
    this.recruitmentTypeService.createRecruitmentType(this.recruitmentTypeObj).subscribe(data => {
      console.log(data);
      this.getRecruitmentType();
    });
  }
  
  }