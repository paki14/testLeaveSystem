import { ScoreParAppraiserGet } from "./score-par-appraiser-get";
import { ParAppraiserGet } from "./par-appraiser-get.model";

export class ReportParAppraiserGet {
    reportId: string;
    appraisedBy: ParAppraiserGet;
    appraisedDate: Date = new Date();
    scoreParAppraiserList: ScoreParAppraiserGet[];
}

