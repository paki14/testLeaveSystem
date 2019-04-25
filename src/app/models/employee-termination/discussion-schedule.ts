import { RequestTermination } from "./request-termination";

export class DiscussionSchedule {
    id:Number;
    requestTermination:RequestTermination = new RequestTermination();
    time:Date;
    venue:String;
}
