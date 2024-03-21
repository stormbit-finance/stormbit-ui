import { Module } from '@nestjs/common';
import { LoanService } from './loan.service';
import { LoansController } from './loan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  LoanEntity } from './loan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LoanEntity])],
  controllers: [LoansController],
  providers: [LoanService],
  exports:[LoanService],
})
export class LoanModule {}
