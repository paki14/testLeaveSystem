import { User } from './../employee-termination/user';
import { LeaveType } from './leave-type';
export class LeaveAllocation {
    id:number;
    user:User;
    leaveType:LeaveType;
    allocatedDays:number;
    utilizedDays:number;
}

