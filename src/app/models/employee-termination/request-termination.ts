import { TerminationType } from "./termination-type";
import { User } from "./user";


export class RequestTermination {
    id: number;
    planedLeavingDate:Date;
    reason:String;
    resignationLetter:File;
    terminationType:TerminationType = new TerminationType();
    employee:User = new User();
}
