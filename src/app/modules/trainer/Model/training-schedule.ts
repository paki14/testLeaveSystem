
import { Trainer } from "./trainer";

export class TrainingSchedule {
    id: Number;
    trainingTopic: String;
    date: Date;
    totalCoveredhours: Number;
    status: String;
    trainer = new Trainer();

}
