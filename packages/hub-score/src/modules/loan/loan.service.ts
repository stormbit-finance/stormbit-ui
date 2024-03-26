import { Injectable } from '@nestjs/common';

import { LoanEntity, Tranche } from './loan.entity';
import { LoanRepository } from './loan.repository';


@Injectable()
export class LoanService {
  
  
  constructor(private loanRepository:LoanRepository) {}
  
  getApprovedLoans(): LoanEntity[] | PromiseLike<LoanEntity[]> {
    return this.loanRepository.getApprovedLoans()
  }
  getRefusedLoans(): LoanEntity[] | PromiseLike<LoanEntity[]> {
    return this.loanRepository.getRefusedLoans()
  }
  
  async getRepaymentTimeById(id: number): Promise<number> {
    const loan = await this.loanRepository.getUserById(id);
    return loan.repaid.repaymentTime;
  }

  async getRepaidById(id: number): Promise<boolean> {
    const loan = await this.loanRepository.getUserById(id);
    return loan.repaid.repaid;
  }

  async getRepaymentDetails(id: number): Promise<Tranche[]> {
    const loan = await this.loanRepository.getUserById(id);
    return loan.repaid.tranches;
  }

}