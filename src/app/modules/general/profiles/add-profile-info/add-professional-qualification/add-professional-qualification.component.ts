import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessionalQualificationService } from '../../view-profile-info/view-professional-qualification/professional-qualification.service';
import { ProfessionalQualification } from '../../view-profile-info/view-professional-qualification/professional-qualification.model';

@Component({
  selector: 'app-add-professional-qualification',
  templateUrl: './add-professional-qualification.component.html',
  styleUrls: ['./add-professional-qualification.component.css']
})
export class ProfessionalQualificationComponent implements OnInit {

  
profesionalObj:ProfessionalQualification=new ProfessionalQualification();
  constructor(private router: Router,
    private professionalQualificationService:ProfessionalQualificationService) { }

  ngOnInit() {
   
  }

  addEmpProQualification(){
  
    return this.professionalQualificationService.createEmpProQualification(this.profesionalObj).subscribe(data=>{
      console.log(data);
      // alert("added");
      this.next()
    })
  }

  previous() {
    this.router.navigate(['/appointment/appointmentInformation/academicInfo']);
  }

  next() {
    this.router.navigate(['/appointment/appointmentInformation/recordOfEmp']);
  }
}
