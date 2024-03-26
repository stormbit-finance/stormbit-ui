import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { LoanService } from './loan.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { LoanEntity, Tranche } from './loan.entity';
import { LoanRepaidDto, LoanRepaymentDetailsDto, LoanRepaymentTimeDto } from './loan.dto';

@ApiTags('LOAN')
@Controller('loan')
export class LoansController {
  constructor(private loanService: LoanService) {}

  @Get('status/approved')
  @ApiOperation({ summary: 'Get approved loans' })
  @ApiResponse({ status: 200, description: 'Retrieved approved loans successfully', type: LoanEntity, isArray: true })
  async getApprovedLoans(): Promise<LoanEntity[]> {
    try {
      return this.loanService.getApprovedLoans();
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve approved loans');
    }
  }

  @Get('status/refused')
  @ApiOperation({ summary: 'Get refused loans' })
  @ApiResponse({ status: 200, description: 'Retrieved refused loans successfully', type: LoanEntity, isArray: true })
  async getRefusedLoans(): Promise<LoanEntity[]> {
    try {
      return this.loanService.getRefusedLoans();
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve refused loans');
    }
  }

  @Get('repaymentTime/:id')
  @ApiOperation({ summary: 'Get repayment time by loan ID' })
  @ApiResponse({ status: 200, description: 'Retrieved repayment time successfully', type: LoanRepaymentTimeDto })
  @ApiResponse({ status: 404, description: 'Loan not found' })
  @ApiParam({ name: 'id', description: 'Loan ID' })
  async getRepaymentTime(@Param('id') id: number): Promise<LoanRepaymentTimeDto> {
    try {
      const repaymentTime = await this.loanService.getRepaymentTimeById(id);
      if (!repaymentTime) {
        throw new NotFoundException('Loan not found');
      }
      return { repaymentTime };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to retrieve repayment time');
    }
  }

  @Get('repaid/:id')
  @ApiOperation({ summary: 'Get repaid status by loan ID' })
  @ApiResponse({ status: 200, description: 'Retrieved repaid status successfully', type: LoanRepaidDto })
  @ApiResponse({ status: 404, description: 'Loan not found' })
  @ApiParam({ name: 'id', description: 'Loan ID' })
  async getRepaid(@Param('id') id: number): Promise<LoanRepaidDto> {
    try {
      const repaid = await this.loanService.getRepaidById(id);
      if (repaid === undefined) {
        throw new NotFoundException('Loan not found');
      }
      return { repaid };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to retrieve repaid status');
    }
  }

  @Get('repaymentDetails/:id')
  @ApiOperation({ summary: 'Get repayment details by loan ID' })
  @ApiResponse({ status: 200, description: 'Retrieved repayment details successfully', type: Tranche, isArray: true })
  @ApiResponse({ status: 404, description: 'Loan not found' })
  @ApiParam({ name: 'id', description: 'Loan ID' })
  async getRepaymentDetails(@Param('id') id: number): Promise<Tranche[]> {
    try {
      const repaymentDetails = await this.loanService.getRepaymentDetails(id);
      if (!repaymentDetails || repaymentDetails.length === 0) {
        throw new NotFoundException('Loan not found');
      }
      return repaymentDetails;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to retrieve repayment details');
    }
  }
}