import { Privilege } from 'src/app/models/privilege/privilege';
import { Component, OnInit } from '@angular/core';
import { PrivilegeService } from 'src/app/services/privilege/privilege.service';
import { ModuleService } from 'src/app/services/privilege/module.service';
import { Module } from 'src/app/models/privilege/module';
import { StateUpdate } from 'src/app/models/privilege/state-update';

@Component({
  selector: 'app-previleges',
  templateUrl: './previleges.component.html',
  styleUrls: ['./previleges.component.css']
})
export class PrevilegesComponent implements OnInit {

  modules: Module[];
  moduleObj = new Module();
  privileges: Privilege[];
  privilegeObj = new Privilege();
  stateUpdateObj = new StateUpdate();
  successDataObj = new StateUpdate();
  state: boolean = false;
  constructor(private moduleService: ModuleService, private privilegeService: PrivilegeService) { }

  roleOrders = [
    { roleName: 'ADMIN' },
    { roleName: 'DIRECTOR' },
    { roleName: 'HR_MANAGER' },
    { roleName: 'MANAGER' },
    { roleName: 'ACCOUNTANT' },
    { roleName: 'HR' },
    { roleName: 'EMPLOYEE' },
    { roleName: 'TRAINEE' },
    { roleName: 'TRAINER' }
  ]

  authorizeTypeOrders = [
    { authorizeTypeName: 'Create' },
    { authorizeTypeName: 'Read' },
    { authorizeTypeName: 'Update' },
    { authorizeTypeName: 'Delete' }
  ]

  ngOnInit() {
    this.getAllModules();
  }

  getAllModules() {
    this.moduleService.getAllModules().subscribe(data => {
      this.modules = data;
      console.log(this.modules);
    })
  }

  // getAllPrivileges() {
  //   this.privilegeService.getAllPrivileges().subscribe(data => {
  //     this.privileges = data;
  //   })
  // }

  // getPrivilegeStateChange(module, event) {
  //   const target = event.target || event.srcElement || event.currentTarget;
  //   const idAttr = target.attributes.id;
  //   const value = idAttr.nodeValue;

  //   var element = <HTMLInputElement>document.getElementById(value);
  //   var isChecked = element.checked;

  //   var splitId = value.split("-");
  //   console.log(splitId[0].toUpperCase());
  //   console.log(splitId[1].toUpperCase());
  //   console.log(isChecked);
  //   console.log(module.moduleName);

  //   var roleName = splitId[1].toUpperCase();

  //   this.stateUpdateObj.authorizeName = splitId[0];
  //   this.stateUpdateObj.roleName = splitId[1].toUpperCase();
  //   this.stateUpdateObj.moduleName = module.moduleName;
  //   this.stateUpdateObj.enabled = isChecked;

  //   this.privilegeService.updateState(this.stateUpdateObj).subscribe(data => {
  //     console.log(data);
  //   })
  // }

  // getState(module, id): boolean {
  //   // const target = event.target || event.srcElement || event.currentTarget;
  //   // const idAttr = target.attributes.id;
  //   // const value = idAttr.nodeValue;
  //   console.log(id);
  //   var splitId = id.split("-");
  //   var authorizeName = splitId[0];
  //   var roleName = splitId[1].toUpperCase();

  //   this.stateUpdateObj.authorizeName = authorizeName;
  //   this.stateUpdateObj.roleName = roleName;
  //   this.stateUpdateObj.moduleName = module.moduleName;

  //   this.privilegeService.getState(this.stateUpdateObj).subscribe(data => {
  //     this.state = data;
  //     console.log(this.state);
  //   })

  //   return this.state;
  // }

  getCheckedState(moduleName, roleName, authorizeName, privilegeStatus) {
    console.log("status: " + privilegeStatus)
    if (privilegeStatus) {
      this.state = false;
    } else {
      this.state = true;
    }
    // alert(moduleName + " " + roleName + " " + authorizeName + " " + privilegeStatus)
    this.stateUpdateObj.moduleName = moduleName;
    this.stateUpdateObj.roleName = roleName;
    this.stateUpdateObj.authorizeName = authorizeName;
    this.stateUpdateObj.enabled = this.state;

    this.privilegeService.updateState(this.stateUpdateObj).subscribe(data => {
      this.successDataObj = data;
      console.log(this.successDataObj);
    })

  }



}
