
import { Controller,Post, Get, Param, Put,Delete, Body, UseGuards, Patch } from '@nestjs/common';
import { LoanService } from './loan.service';
import { LoanEntity } from './loan.entity';
import { AuthGuard } from '@nestjs/passport';
import { CreateLoanDto } from './dto/createloan.dto';
import { updatedLoanDto } from './dto/updateloan.dto';

@Controller('loan')

    export class LoanController {
        constructor(private readonly loanService: LoanService) {}
      
        @Post()
        async createLoan(@Body() loan: CreateLoanDto): Promise<CreateLoanDto> {
          return this.loanService.createLoan(loan);
        }
      
        @Get()
      
        async getAllLoans(): Promise<LoanEntity[]> {
          return this.loanService.getAllLoans();
        }
      
        @Get(':id')
        async getLoanById(@Param('id') id: number): Promise<LoanEntity> {
          return this.loanService.getLoanById(id);
        }
      
        @Patch(':id')
        async updateLoan(@Param('id') id: number, @Body() updatedLoan: updatedLoanDto){
          return this.loanService.updateLoan(id, updatedLoan);
        }
      
        @Delete(':id')
        async deleteLoan(@Param('id') id: number): Promise<void> {
          return this.loanService.deleteLoan(id);
        }
}
