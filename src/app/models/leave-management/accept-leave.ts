import { User } from 'src/app/models/leave-management/user';

import { LeaveRequest } from './leave-request';
export class AcceptLeave {
    id: number;
    leaveRequest: LeaveRequest;
    acceptedBy: User;
}
