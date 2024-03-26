import { Injectable, NotFoundException } from '@nestjs/common';
import { LoanEntity, Tranche } from './loan.entity';
import { LoanRepository } from './loan.repository';

@Injectable()
export class LoanService {
  constructor(private loanRepository: LoanRepository) {}

  async getApprovedLoans(): Promise<LoanEntity[]> {
    try {
      return await this.loanRepository.getApprovedLoans();
    } catch (error) {
      throw new Error('Failed to retrieve approved loans');
    }
  }

  async getRefusedLoans(): Promise<LoanEntity[]> {
    try {
      return await this.loanRepository.getRefusedLoans();
    } catch (error) {
      throw new Error('Failed to retrieve refused loans');
    }
  }

  async getRepaymentTimeById(id: number): Promise<number> {
    try {
      const loan = await this.loanRepository.getLoanById(id);
      if (!loan) {
        throw new NotFoundException('Loan not found');
      }
      return loan.repaid.repaymentTime;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new Error('Failed to retrieve repayment time');
    }
  }

  async getRepaidById(id: number): Promise<boolean> {
    try {
      const loan = await this.loanRepository.getLoanById(id);
      if (!loan) {
        throw new NotFoundException('Loan not found');
      }
      return loan.repaid.repaid;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new Error('Failed to retrieve repaid status');
    }
  }

  async getRepaymentDetails(id: number): Promise<Tranche[]> {
    try {
      const loan = await this.loanRepository.getLoanById(id);
      if (!loan) {
        throw new NotFoundException('Loan not found');
      }
      return loan.repaid.tranches;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new Error('Failed to retrieve repayment details');
    }
  }
}