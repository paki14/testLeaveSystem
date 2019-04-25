import { User } from "./user";
import { WelfareEvent } from "./welfare-event";

export class IndividualWelfare {
    id:Number;

    
    amount:Number;
    date:Date;
    user:User=new User;
    welfareEvent:WelfareEvent=new WelfareEvent;

}