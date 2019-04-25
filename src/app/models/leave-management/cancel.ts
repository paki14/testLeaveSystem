import { LeaveRequest } from "./leave-request";

export class Cancel {
    id:number;
    leaveRequest:LeaveRequest = new LeaveRequest();
    reason:string;
    status:string;
}
