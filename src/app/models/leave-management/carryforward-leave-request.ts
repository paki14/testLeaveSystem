import { User } from "./user";

export class CarryforwardLeaveRequest {
    carryforwardDays: number;
    userName: String;
}

export class CarryforwardRequestData {
    id: number;
    carryForwardDays:number;
    user: User = new User();
    status: string;
}

export class RejectCarryforwardData {
    carryforwardRequestData: CarryforwardRequestData = new CarryforwardRequestData();
    reason: string;
}