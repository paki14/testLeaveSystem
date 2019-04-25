import { Component, OnInit } from "@angular/core";
import { TokenStorageService } from "src/app/services/login/token-storage.service";
import { StateUpdate } from "src/app/models/privilege/state-update";
import { InteractionService } from "src/app/services/interaction.service";
import { PrivilegeService } from "src/app/services/privilege/privilege.service";

@Component({
  selector: "app-leave-management",
  templateUrl: "./leave-management.component.html",
  styleUrls: ["./leave-management.component.css"]
})
export class LeaveManagementComponent implements OnInit {
  info: { token: string; username: string; authorities: string[] };

  leaveRequestObj = new StateUpdate();
  cancelLeaveRequestObj = new StateUpdate();
  leaveHistoryObj = new StateUpdate();
  requestLeaveObj = new StateUpdate();
  leavePstEventCalenderObj = new StateUpdate();
  leaveCalenderObj = new StateUpdate();
  carryForwardLeaveObj = new StateUpdate();
  carryForwardLeaveRequestObj = new StateUpdate();

  constructor(
    private token: TokenStorageService,
    private interactionService: InteractionService,
    private privilegeService: PrivilegeService
  ) {}

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

    // this.getLeaveRequestPrivilegeStatus(this.leaveRequestObj, "Leave Requests", "Read");
    // this.getLeaveRequestPrivilegeStatus(this.cancelLeaveRequestObj, "Approve or Cancel Leave", "Read");
    // this.getLeaveRequestPrivilegeStatus(this.leaveHistoryObj, "Leave History", "Read");
    // this.getLeaveRequestPrivilegeStatus(this.requestLeaveObj, "Request Leave", "Read");
    // this.getLeaveRequestPrivilegeStatus(this.leavePstEventCalenderObj, "Leave Post Event Calendar", "Read");
  }

  getLeaveRequestPrivilegeStatus(
    leaveObj: StateUpdate,
    moduleName,
    authorizeTypeName
  ) {
    leaveObj.authorizeName = authorizeTypeName;
    leaveObj.moduleName = moduleName;
    this.interactionService.userInfo$.subscribe(data => {
      leaveObj.roleName = data.authorities;
    });

    if (leaveObj.moduleName == "Leave Requests") {
      this.privilegeService
        .getPrivilege(
          leaveObj.authorizeName,
          leaveObj.moduleName,
          leaveObj.roleName
        )
        .subscribe(data => {
          this.leaveRequestObj = data;
        });
    }
    if (leaveObj.moduleName == "Approve or Cancel Leave") {
      this.privilegeService
        .getPrivilege(
          leaveObj.authorizeName,
          leaveObj.moduleName,
          leaveObj.roleName
        )
        .subscribe(data => {
          this.cancelLeaveRequestObj = data;
        });
    }
    if (leaveObj.moduleName == "Leave History") {
      this.privilegeService
        .getPrivilege(
          leaveObj.authorizeName,
          leaveObj.moduleName,
          leaveObj.roleName
        )
        .subscribe(data => {
          this.leaveHistoryObj = data;
        });
    }
    if (leaveObj.moduleName == "Request Leave") {
      this.privilegeService
        .getPrivilege(
          leaveObj.authorizeName,
          leaveObj.moduleName,
          leaveObj.roleName
        )
        .subscribe(data => {
          this.requestLeaveObj = data;
        });
    }
    if (leaveObj.moduleName == "Leave Post Event Calendar") {
      this.privilegeService
        .getPrivilege(
          leaveObj.authorizeName,
          leaveObj.moduleName,
          leaveObj.roleName
        )
        .subscribe(data => {
          this.leavePstEventCalenderObj = data;
        });
    }
  }
}
