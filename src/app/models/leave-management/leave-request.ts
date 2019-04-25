import { LeaveAllocation } from "./leave-allocation";

export class LeaveRequest {
    id:number;
    leaveAllocation : LeaveAllocation = new LeaveAllocation();
    startDate :Date;
    endDate : Date;
    noOfDays: number;
    reason : string;
    attachment : File;
    userName : string;
    createdAt: Date;
    status:string;
}
