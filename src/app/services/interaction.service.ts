import { SelfServiceType } from './../models/self-service/self-service-type';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { SelfService } from 'src/app/models/self-service/self-service';
import { Response } from '../models/self-service/response';
import { CareerDevPlan } from '../modules/general/career-dev-plan/Model/career-dev-plan';
import { Referee } from '../modules/general/profiles/view-profile-info/view-referees/referee.model';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/leave-management/user';
import { LeaveRequest } from '../models/leave-management/leave-request';
import { CarryforwardLeaveRequest, CarryforwardRequestData } from '../models/leave-management/carryforward-leave-request';


@Injectable({
  providedIn: 'root'
})

export class InteractionService {

  constructor() { }

  private loggedInSource = new Subject<string>();
  private selfServiceTypeDataSource = new Subject<SelfServiceType>();
  private msgDataSource = new Subject<string>();
  private selfServiceDataSource = new Subject<SelfService>();
  private responseDataSource = new Subject<Response>();
  private refereeDataSource = new Subject<Referee>()
  private userInfo = new BehaviorSubject<any>(null);
  private comanyCDPDataSource = new Subject<CareerDevPlan>();
  private userDataSource = new Subject<User>();
  private leaveIdDataSource = new Subject<number>();
  private leaveRequestDataSource = new Subject<LeaveRequest>();
  private cancelRequestIdDataSource = new Subject<number>();
  private profileObservable = new Subject<string>();
  //Mayu Start
  private carryforwardRequestDataSource = new Subject<CarryforwardLeaveRequest>();
  private carryforwardLeaveDataSource = new Subject<CarryforwardRequestData>();



  profileObservable$ = this.profileObservable.asObservable();
  loggedInSource$ = this.loggedInSource.asObservable();
  selfServiceTypeDataSource$ = this.selfServiceTypeDataSource.asObservable();
  selfServiceDataSource$ = this.selfServiceDataSource.asObservable();
  responseDataSource$ = this.responseDataSource.asObservable();
  refereeDataSource$ = this.refereeDataSource.asObservable();
  userInfo$ = this.userInfo.asObservable();
  msgDataSource$ = this.msgDataSource.asObservable();
  comanyCDPDataSource$ = this.comanyCDPDataSource.asObservable();
  userDataSource$ = this.userDataSource.asObservable();
  leaveIdDataSource$ = this.leaveIdDataSource.asObservable();
  leaveRequestDataSource$ = this.leaveRequestDataSource.asObservable();
  cancelRequestIdDataSource$ = this.cancelRequestIdDataSource.asObservable();
  //MayuStart
  carryforwardRequestDataSource$ = this.carryforwardRequestDataSource.asObservable();
  carryforwardRequestIdDataSource$ = this.carryforwardLeaveDataSource.asObservable();

  pushRouteRole(role: string) {
    this.profileObservable.next(role);
  }

  sendLogin(loggedIn: string) {
    this.loggedInSource.next(loggedIn);
  }

  sendSelfServiceType(selfServiceType: SelfServiceType) {
    return this.selfServiceTypeDataSource.next(selfServiceType);
  }
  sendSelfService(selfService: SelfService) {
    return this.selfServiceDataSource.next(selfService);
  }
  sendResponseService(response: Response) {
    return this.responseDataSource.next(response);
  }
  upadateMsg(msg: string) {
    this.msgDataSource.next(msg);
  }

  sendCDPService(careerDevPlan: CareerDevPlan) {
    return this.comanyCDPDataSource.next(careerDevPlan);
  }
  sendReferee(referee: Referee) {
    return this.refereeDataSource.next(referee);
  }
  sendUserInfo(userDetails: any) {
    this.userInfo.next(userDetails);
  }
  sendUserId(user: User) {
    this.userDataSource.next(user);
  }

  setLeaveId(leaveId: number) {
    this.leaveIdDataSource.next(leaveId);
  }

  sendLeaveRequest(leaveRequest: LeaveRequest) {
    this.leaveRequestDataSource.next(leaveRequest);
  }

  //Mayu
  sendCarryForwardLeaveRequest(carryforwardRequest: CarryforwardLeaveRequest) {
    this.carryforwardRequestDataSource.next(carryforwardRequest);
  }

  sendCarryforward(carryforward) {
    this.carryforwardLeaveDataSource.next(carryforward);
  }

  sendCancelRequestId(cancelRequestId: number) {
    this.cancelRequestIdDataSource.next(cancelRequestId);
  }

}
