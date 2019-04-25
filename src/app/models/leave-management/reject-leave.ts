import { LeaveRequest } from './leave-request';
import { User } from './user';
export class RejectLeave {
    id: number;
    leaveRequest : LeaveRequest;
    rejectedBy: User;
    rejectReason: string;
}
