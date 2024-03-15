
import { Controller,Post, Get, Param, Put,Delete, Body, UseGuards } from '@nestjs/common';
import { LoanService } from './loan.service';
import { LoanEntity } from './loan.entity';
import { AuthGuard } from '@nestjs/passport';
import { CreateLoanDto } from './dto/createloan.dto';

@Controller('loan')

    export class LoanController {
        constructor(private readonly loanService: LoanService) {}
      
        @Post()
        async createLoan(@Body() loan: CreateLoanDto): Promise<CreateLoanDto> {
          return this.loanService.createLoan(loan);
        }
      
        @Get()
        @UseGuards(AuthGuard('jwt'))
        async getAllLoans(): Promise<LoanEntity[]> {
          return this.loanService.getAllLoans();
        }
      
        @Get(':id')
        async getLoanById(@Param('id') id: number): Promise<LoanEntity> {
          return this.loanService.getLoanById(id);
        }
      
        @Put(':id')
        async updateLoan(@Param('id') id: number, @Body() updatedLoan: LoanEntity): Promise<LoanEntity> {
          return this.loanService.updateLoan(id, updatedLoan);
        }
      
        @Delete(':id')
        async deleteLoan(@Param('id') id: number): Promise<void> {
          return this.loanService.deleteLoan(id);
        }
}
