import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { RolesAndResponsibilitiesService } from './roles-and-responsibilities.service';
import { RolesAndResponsibilities } from './roles-and-responsibilities';

import { JobService } from 'src/app/modules/employee/employee-management/appointment/service/job.service';
import { KeyActivityService } from 'src/app/modules/employee/employee-management/appointment/service/key-activity.service';
import { LocationService } from 'src/app/modules/employee/employee-management/appointment/service/location.service';

import { Job } from 'src/app/modules/employee/recruitment/Modal/job';
import { KeyActivity } from 'src/app/modules/employee/employee-management/appointment/models/key-activity.model';
import { Location } from 'src/app/modules/employee/employee-management/appointment/models/location.model';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';
import { ProfileInfoService } from '../trainee-profile-table/profile-info.service';
import { Profile } from '../trainee-profile-table/profile.model';



@Component({
  selector: 'app-view-roles-and-resposibilities',
  templateUrl: './view-roles-and-resposibilities.component.html',
  styleUrls: ['./view-roles-and-resposibilities.component.css']
})

export class ViewRolesAndResposibilitiesComponent implements OnInit {

  constructor(private route:Router,
    private roleService:RolesAndResponsibilitiesService,
    private profileInfoService:ProfileInfoService,
    private jobService:JobService,
    private keyActivityService:KeyActivityService,
    private locationService:LocationService,
    private token: TokenStorageService
    ) { }
userid:Number

info:any
  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.getJob()
    this.profileInfoService.profileuserObservable$.subscribe(userId=>{
      this.userid=userId;
      this.getRolesAndResponsibilitiesByUserId(userId);
    })
    this.getLocationId()
    this.getKeyActivityId()
  }
  job:Job[]
getJob(){
  this.jobService.getAllJob().subscribe(job=>{
    this.job=job
  })
}
keyActivity:KeyActivity[]
getKeyActivityId(){
  return this.keyActivityService.getAllKeyActivity().subscribe(data=>{
    this.keyActivity=data;
  })
}
locations:Location[];
getLocationId(){
  return this.locationService.getAllLocation().subscribe(data=>{
    this.locations=data;
  })  
}
  
  roles:RolesAndResponsibilities[];
  getallRolesAndResponsibilites(){
    return this.roleService.getAllRolesandResponsibilities().subscribe(data=>{
      this.roles=data;
    })
  }
  getRolesAndResponsibilitiesByUserId(uid){
    return this.roleService.getRolesandResponsibilitiesByuserId(uid).subscribe(data=>{
      console.log(data);
      this.roles=data;
    })  }
    rolesandResObj:RolesAndResponsibilities= new RolesAndResponsibilities();
    deleteRolesAndResponsibilities(){
      return this.roleService.deleteRolesAndResponsibilities(this.rolesandResObj).subscribe(data=>{
        this.getRolesAndResponsibilitiesByUserId(this.userid);
      })
    }
    getDeleteId(data){
      this.rolesandResObj=Object.assign({},data);
      // alert(this.rolesandResObj.id)
    }
    editRolesAndResponse(){
      this.rolesandResObj.user= this.userid
      this.roleService.editaRolesAndResponsibilities(this.rolesandResObj).subscribe(data=>{
        this.getRolesAndResponsibilitiesByUserId(this.userid)
      })
    }
    userData:Profile[];
    getUserId(){
      return this.profileInfoService.getGenerelInfo().subscribe(data=>{
        this.userData=data;
      })
    }
  gotoNext(){
    this.route.navigate(['/profile/attachmentChecklist'])
  }
  goBack(){
    this.route.navigate(['/profile/referees'])
  }

}
