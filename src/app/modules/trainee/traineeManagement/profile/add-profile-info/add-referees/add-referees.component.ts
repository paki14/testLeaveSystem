import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RefereesService } from '../../view-profile-info/view-referees/referees.service';
import { Referee } from '../../view-profile-info/view-referees/referee.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Profile } from '../../view-profile-info/trainee-profile-table/profile.model';
import { ProfileInfoService } from '../../view-profile-info/trainee-profile-table/profile-info.service';

@Component({
  selector: 'app-add-referees',
  templateUrl: './add-referees.component.html',
  styleUrls: ['./add-referees.component.css']
})
export class RefereesComponent implements OnInit {
  refObj:Referee=new Referee();
  userObj:Profile=new Profile();
  user:Profile[];
  referee:Referee[]
  constructor(private router: Router,
    private refereeService:RefereesService,
    private generalService:ProfileInfoService
    ) { }

    addUserForm = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        // Validators.minLength(3),
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ])),
      relationship: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Z]*$')
      ])),
      telephone: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(9),
        Validators.pattern('^[0-9]*$')
      ])),
      address: new FormControl('', Validators.compose([
        Validators.required,
        //Validators.minLength(3),
        // Validators.pattern('[a-z0-9._/\%+-]')
      ])),
      fullName: new FormControl('', Validators.compose([
        Validators.required,
        //Validators.minLength(3),
        // Validators.pattern('^[a-z]*$')
      ])),
      refereeName: new FormControl('', Validators.compose([
        Validators.required,
        //Validators.minLength(3),
        Validators.pattern('^[a-zA-Z]*$')
      ])),
    });
    

  ngOnInit() {
    this.getUserId()
    this.getReferee()
  }
  responseMsg:string
  responseMsgTimeOut() {
    setTimeout(() => {
      this.responseMsg = null;
    }, 3000);
  }
  // createComplain() {
  //   this.selfServiceObj.user= this.selfServiceObj.relevantIndividual;
  //   this.selfServiceObj.status = "Pending";
  //   this.selfServiceService.createComplain(this.selfServiceObj).subscribe(data => {
  //     console.log(data);
  //     this.responseMsg = "success";
  //     this.responseMsgTimeOut();
  //   })
  //   this.responseMsg = "fail";
  //   this.responseMsgTimeOut();
  // }
  addReferee(){
    // this.refObj.user=1;
    return this.refereeService.addReferee(this.refObj).subscribe(data=>{
      this.refObj=data;
    this.getReferee()
    // this.clear();
    this.responseMsg = "success";
    this.responseMsgTimeOut();
    
    });
    this.responseMsg = "fail";
    this.responseMsgTimeOut();
  }
  getReferee(){
    return this.refereeService.getReferee().subscribe(data=>{
      this.referee=data;
    })
  }
  getUserId(){
    return this.generalService.getGenerelInfo().subscribe(data=>{
      this.user=data;
      this.refObj.trainee=0;
      // console.log(data);
      // this.userObj.id=0;
    })
  }
  
  previous() {
    this.router.navigate(['/appointment/appointmentInformation/recordOfEmp']);
  }

  next() {
    this.router.navigate(['/appointment/appointmentInformation/attachment']);
  }
  // clear(){

  //   this.refObj.refereeName=null;
  //   this.refObj.trainee=null;
  //   this.refObj.address=null;
  //   this.refObj.email=null;
  //   this.refObj.contactNo=null;
  //   this.refObj.relationship=null;

  // }

}
