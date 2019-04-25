import { ScheduleParContentPost } from "./schedule-par-content-post.model";
import { ScheduleParAppraisorsPost } from "./schedule-par-appraisors-post.model";
import { EmployeeDetails } from "./employee-details.model";

export class ScheduleParPost{
    parId: number;
    employeeID: string;
    employeeEmail:string;
    scheduleDate: Date=new Date();
    scheduleParAppraisorsList:ScheduleParAppraisorsPost[]=[];
    scheduleParContentList:ScheduleParContentPost[]=[];
}
