import { CareerPlans } from "./career-plans";
import { User } from "./user";


export class CareerDevPlan {
    id: number;
    cdpId : CareerPlans=new CareerPlans();
    userId : number;
    status : String;
}
