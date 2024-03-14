import { IsNotEmpty, IsNumber, Min, IsString, IsDateString, IsBoolean } from 'class-validator';

export class CreateLoanDto {
  @IsNotEmpty()
  @IsString()
  debt_total: number;

  @IsNotEmpty()
  @IsString()
  lender: number;
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  deposit_total: number;


  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  repaid_total: number;

  @IsNotEmpty()
  @IsDateString()
  loans_request_rejected: number;

  @IsNotEmpty()
  @IsDateString()
loans_expired: number;


}