
import { Designation } from "./designation";
import { User } from "src/app/models/self-service/user";

export class AddDeniedPromotion {

	id : number;
	userId : User= new User;
	deniedDate : Date;
	deniedRemark : String;
	desinationId : Designation= new Designation;
	deniedBy : number;

}
