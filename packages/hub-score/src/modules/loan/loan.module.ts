import { Module } from '@nestjs/common';
import { LoanService } from './loan.service';
import { LoansController } from './loan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  LoanEntity } from './loan.entity';
import { LoanRepository } from './loan.repository';
import { TrancheEntity } from './tranche.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LoanEntity,TrancheEntity])],
  controllers: [LoansController],
  providers: [LoanService,LoanRepository],
  exports:[LoanService],
})
export class LoanModule {}
