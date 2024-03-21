import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Loan } from './loan.entity';


@Injectable()
export class LoanService {
  // constructor(
  //   @InjectRepository(Loan)
  //   private loanRepository: Repository<Loan>,
  // ) {}

  // async create(createLoanDto: CreateLoanDto): Promise<Loan> {
  //   const loan = this.loanRepository.create(createLoanDto);
  //   return this.loanRepository.save(loan);
  // }

  // async findAll(): Promise<Loan[]> {
  //   return this.loanRepository.find();
  // }

  // async findOne(id: number): Promise<Loan> {
  //   return this.loanRepository.findOne({ where: { id } });
  // }

  // async update(id: number, updateLoanDto: UpdateLoanDto): Promise<Loan> {
  //   await this.loanRepository.update(id, updateLoanDto);
  //   return this.findOne(id);
  // }

  // async remove(id: number): Promise<void> {
  //   await this.loanRepository.delete(id);
  // }
}