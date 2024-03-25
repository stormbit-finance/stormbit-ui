import { Module } from '@nestjs/common';
import { LoanService } from './loan.service';
import { LoansController } from './loan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  LoanEntity } from './loan.entity';
import { LoanRepository } from './loan.repository';

@Module({
  imports: [TypeOrmModule.forFeature([LoanEntity])],
  controllers: [LoansController],
  providers: [LoanService,LoanRepository],
  exports:[LoanService],
})
export class LoanModule {}
