import { IsNotEmpty, IsNumber, Min, IsString, IsDateString, IsBoolean } from 'class-validator';

export class CreateLoanDto {
  @IsNotEmpty()
  @IsString()
  borrower: string;

  @IsNotEmpty()
  @IsString()
  lender: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  amount: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  interest: number;

  @IsNotEmpty()
  @IsDateString()
  startDate: Date;

  @IsNotEmpty()
  @IsDateString()
  endDate: Date;

  @IsNotEmpty()
  @IsString()
  collateral: string;

  @IsNotEmpty()
  @IsBoolean()
  repaid: boolean;
}