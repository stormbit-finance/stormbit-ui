import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoanEntity } from './loan.entity';
import { Repository } from 'typeorm';
import { CreateLoanDto } from './dto/createloan.dto';

@Injectable()
export class LoanService {

    constructor(
        @InjectRepository(LoanEntity)
        private loanRepository: Repository<LoanEntity>,
      ) {}
    
      async createLoan(loan: CreateLoanDto){
        return this.loanRepository.save(loan);
      }
    
      async getAllLoans(): Promise<LoanEntity[]> {
        return this.loanRepository.find();
      }
    
      async getLoanById(id: number): Promise<LoanEntity> {
        return this.loanRepository.findOne({where:{id}});
      }
    
      async updateLoan(id: number, updatedLoan: LoanEntity): Promise<LoanEntity> {
        const loan = await this.loanRepository.findOne({where:{id}});
        if (!loan) {
          throw new Error(`Loan with id ${id} not found`);
        }
        Object.assign(loan, updatedLoan);
        return this.loanRepository.save(loan);
      }
    
      async deleteLoan(id: number): Promise<void> {
        const loan = await this.loanRepository.findOne({where:{id}});
        if (!loan) {
          throw new Error(`Loan with id ${id} not found`);
        }
        await this.loanRepository.remove(loan);
      }

}
