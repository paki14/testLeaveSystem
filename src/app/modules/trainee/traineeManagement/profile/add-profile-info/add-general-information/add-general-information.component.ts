import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';
import { Department } from './department.model';
import { Role } from './role.model';
import { Profile } from '../../view-profile-info/trainee-profile-table/profile.model';
import { ProfileInfoService } from '../../view-profile-info/trainee-profile-table/profile-info.service';



@Component({
  selector: 'app-add-generals-information',
  templateUrl: './add-general-information.component.html',
  styleUrls: ['./add-general-information.component.css']
})
export class GeneralsInformationComponent implements OnInit {
  proObj: Profile = new Profile();
  departments: Department[];
  roles:Role[];
  constructor(private router: Router,
    private profileser: ProfileInfoService,
    private token: TokenStorageService) { }
info:any;
  ngOnInit() {
    this.info = {
      // token: this.token.getToken(),
      // username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.getDepartments();
    this.getRoles();
  }
  responseMsg: string
  responseMsgTimeOut() {
    setTimeout(() => {
      this.responseMsg = null;
    }, 3000);
  }

  addUserForm = new FormGroup({
    religion: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z]*$')

    ])),
    email: new FormControl('', Validators.compose([
      Validators.required,
      //Validators.minLength(3),
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
    ])),
   
    traineeName: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z]*$')
      // Validators.pattern('[a-z]')
    ])),
    department:new FormControl('', Validators.compose([
      Validators.required])),
      role:new FormControl('', Validators.compose([
        Validators.required])),
    nationality: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z]*$')
      // Validators.pattern('[a-z]')
    ])),
    nic: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(9),
      Validators.pattern('[0-9]+v')
    ])),
    date: new FormControl('', Validators.compose([
      Validators.required,
      //Validators.minLength(3)
    ])),
    dateofbirth: new FormControl('', Validators.compose([
      Validators.required,
      //Validators.minLength(3)
    ])),
    gender: new FormControl('', Validators.compose([
      Validators.required,
      //Validators.minLength(3)
    ])),
    permanentaddress: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(150)
    ])),
    residentialAddress: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(150)
    ])),
    mobile: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(9),
      Validators.pattern('^[0-9]*$')
    ])),
    telephoneNumber: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(9),
      Validators.pattern('^[0-9]*$')

    ])),
    maritalStatus: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z]*$')
    ])),
    employment:new FormControl('', Validators.compose([
      Validators.required, 
    ])),
      occupation: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Z]*$')
    ])),
    qualification:new FormControl('', Validators.compose([
      Validators.required, 
    ])),
  });

  addProfileGeneralInfo() {
    return this.profileser.addGeneralInfo(this.proObj).subscribe(data => {
      console.log(data);
       alert(data)
      // this.next();
      this.responseMsg = "success";
      this.responseMsgTimeOut();
      this.clear();


    });
    this.responseMsg = "fail";
    this.responseMsgTimeOut();
  }
  getDepartments(){
    this.profileser.getDepartments().subscribe(data=>{
      this.departments=data;
      this.proObj.traineeDepartment=0
    })
  }
  getRoles(){
    this.profileser.getRoles().subscribe(data=>{
      this.roles=data;
      
    })
  }
  next() {
    this.router.navigate(['/appointment/appointmentInformation/academicInfo']);
  }
  clear() {
    this.proObj.fullName=null;
    this.proObj.email=null;
    this.proObj.gender=null;
    this.proObj.nationality=null;
    this.proObj.nic=null;
    this.proObj.religion=null;
    this.proObj.permenentAddress=null;
    this.proObj.dateOfBirth=null;
    this.proObj.maritalStatus=null;
    this.proObj.residentialAddress=null;
    this.proObj.telephoneNumber=null;
    this.proObj.mobileNumber=null;
    this.proObj.traineeDepartment=null;
    this.proObj.role=null;
    this.proObj.occupation=null;
    this.proObj.employment=null;
    this.proObj.qualificationLevel=null;
    
  }

}
