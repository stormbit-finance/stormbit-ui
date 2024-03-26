import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoanEntity } from './loan.entity';

@Injectable()
export class LoanRepository {
  constructor(
    @InjectRepository(LoanEntity)
    private repository: Repository<LoanEntity>,
  ) {}

  async createLoan(loan: Partial<LoanEntity>): Promise<LoanEntity> {
    const newLoan = this.repository.create(loan);
    return this.repository.save(newLoan);
  }

  async getLoanById(id: number): Promise<LoanEntity> {
    const loan = await this.repository.findOne({ where: { id } });
    if (!loan) {
      throw new NotFoundException('Loan not found');
    }
    return loan;
  }

  async getAllLoans(): Promise<LoanEntity[]> {
    return this.repository.find();
  }

  async updateLoan(id: number, loan: Partial<LoanEntity>): Promise<LoanEntity> {
    const loanFound = await this.repository.findOne({ where: { id } });
    if (!loanFound) {
      throw new NotFoundException('Loan not found');
    }
    Object.assign(loanFound, loan);
    return this.repository.save(loanFound);
  }

  async deleteLoan(id: number): Promise<void> {
    const result = await this.repository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Loan not found');
    }
  }

  async getApprovedLoans(): Promise<LoanEntity[]> {
    return this.repository.find({ where: { approved: true } });
  }

  async getRefusedLoans(): Promise<LoanEntity[]> {
    return this.repository.find({ where: { refused: true } });
  }
}