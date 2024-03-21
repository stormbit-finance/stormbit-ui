import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { LoanService } from './loan.service';

import { ApiTags } from '@nestjs/swagger';

@ApiTags('LOAN')
@Controller('loan')
export class LoansController {
  // constructor(private loanService: LoanService) {}

  // @Post()
  // create(@Body() createLoanDto: CreateLoanDto) {
  //   return this.loanService.create(createLoanDto);
  // }

  // @Get()
  // findAll() {
  //   return this.loanService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: number) {
  //   return this.loanService.findOne(id);
  // }

  // @Put(':id')
  // update(@Param('id') id: number, @Body() updateLoanDto: UpdateLoanDto) {
  //   return this.loanService.update(id, updateLoanDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: number) {
  //   return this.loanService.remove(id);
  // }

  // @Get(':id/status')
  // getStatus(@Param('id') id: number) {
  //   return this.loanService.findOne(id).then((loan) => ({
  //     approved: loan.approved,
  //     refused: loan.refused,
  //     repayment: {
  //       repaid: loan.repaid ? 'yes' : 'no',
  //       timeDelay: loan.timeDelay,
  //     },
  //   }));
  // }
}