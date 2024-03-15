import { IsNotEmpty, IsNumber, Min, IsString, IsDateString, IsBoolean } from 'class-validator';

export class CreateLoanDto {
  @IsNotEmpty()
  @IsNumber()
  debt_total: number;

  @IsNotEmpty()
  @IsNumber()
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
 
  loans_request_rejected: number;

  @IsNotEmpty()
 
loans_expired: number;


}