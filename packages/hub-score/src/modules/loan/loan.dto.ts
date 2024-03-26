// loan.dto.ts
export class LoanRepaymentTimeDto {
    repaymentTime: number;
  }
  
  export class LoanRepaidDto {
    repaid: boolean;
  }
  
  export class LoanRepaymentDetailsDto {
    tranches: Array<{ amount: number; date: Date }>;
  }
  // tranche.dto.ts
export class TrancheDTO {
  amount: number;
  date: Date;
}
