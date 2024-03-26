import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { LoanService } from './loan.service';

import { ApiTags } from '@nestjs/swagger';
import { LoanEntity } from './loan.entity';
import { LoanRepaidDto, LoanRepaymentDetailsDto, LoanRepaymentTimeDto } from './loan.dto';

@ApiTags('LOAN')
@Controller('loan')
export class LoansController {
 
  constructor(private loanService: LoanService ){}


//i expected arrays  with the user approved

 
  @Get('status/approved')
  async getApprovedLoans(): Promise<LoanEntity[]> {
    return this.loanService.getApprovedLoans();
  }

  @Get('status/refused')
  async getRefusedLoans(): Promise<LoanEntity[]> {
    return this.loanService.getRefusedLoans();
  }

  //i expected one json of a unique user 
  @Get('repaymentTime/:id')
  async getRepaymentTime(@Param('id') id: number): Promise<LoanRepaymentTimeDto> {
    const repaymentTime = await this.loanService.getRepaymentTimeById(id);
    return { repaymentTime };
  }

  @Get('repaid/:id')
  async getRepaid(@Param('id') id: number): Promise<LoanRepaidDto> {
    const repaid = await this.loanService.getRepaidById(id);
    return { repaid };
  }

  // @Get('repaymentDetails/:id')
  // async getRepaymentDetails(@Param('id') id: number): Promise<LoanRepaymentDetailsDto> {
  //   const tranches = await this.loanService.getRepaymentDetailsById(id);
  //   return { tranches };
  // }

  
}