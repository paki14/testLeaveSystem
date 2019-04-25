import { Time } from "@angular/common";
import { Timestamp } from "rxjs";

export class AttendanceDetails {
    id:number;
    trainee:Number;
	startTime:Time;
	endTime:Time;
	attendDate:Date;
    updateAt:Date;
    attendantStatus:Number;
	attendType:Number;
	duration:number;
}
