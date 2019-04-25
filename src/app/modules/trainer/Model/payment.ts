import { TrainingSchedule } from "./training-schedule";

export class Payment {
    id: Number;
    status: String;
    amount: Number;
    date: Date;
    trainingSchedule: TrainingSchedule = new TrainingSchedule();

}
