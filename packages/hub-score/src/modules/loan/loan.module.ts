import { Module } from '@nestjs/common';
import { LoanService } from './loan.service';
import { LoanController } from './loan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  LoanEntity } from './loan.entity';
import { LoanRepository } from './loan.repository';
// import { TrancheEntity } from './tranche.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LoanEntity])],
  controllers: [LoanController],
  providers: [LoanService,LoanRepository],
  exports:[LoanService],
})
export class LoanModule {}
