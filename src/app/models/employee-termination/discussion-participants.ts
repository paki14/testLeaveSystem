import { User } from "./user";
import { DiscussionSchedule } from "./discussion-schedule";

export class DiscussionParticipants {
    id:Number;
    employee:User = new User();
    discussionSchedule:DiscussionSchedule = new DiscussionSchedule();
}
