export class ScoreParAppraiseeGet {
    parContentId: string;
    parContentName: string;
    score: number;

    constructor(parContentId: string, score: number) {
        this.parContentId = parContentId;
        this.score = score;
    }
}
