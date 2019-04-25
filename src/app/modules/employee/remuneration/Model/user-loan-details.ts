export class UserLoanDetails {

    userId: {
        id: number;
        fullName: string;
    }
    loanObtainedDate: Date;
    
    loanDetailsEntity: {
        amount: number;
    }
    installmentAmount: number;
    installmentDate: Date;
    redumptionDate: Date;
}
