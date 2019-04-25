import { ScheduleParAppraisorsGet } from "./schedule-par-appraisors-get.model";
import { ScheduleParContentGet } from "./schedule-par-content-get.model";

export class ScheduleParGet{
    parId: number;
    empId: string;
    scheduleDate: Date=new Date();
    scheduleParAppraisorsList:ScheduleParAppraisorsGet[];
    scheduleParContentList:ScheduleParContentGet[]
}