import { Module } from '@nestjs/common';
import { LoanController } from './loan.controller';
import { LoanService } from './loan.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoanEntity } from './loan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LoanEntity])],
  controllers: [LoanController],
  providers: [LoanService]
})
export class LoanModule {}
