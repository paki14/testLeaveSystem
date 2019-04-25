export class ScoreParAppraiseePost {
    parContentId:String;
            score:number;
            comment:string;

    constructor(parContentId:String,score:number,comment:string){
        this.parContentId=parContentId;
        this.score=score;
        this.comment=comment;
    }
}
