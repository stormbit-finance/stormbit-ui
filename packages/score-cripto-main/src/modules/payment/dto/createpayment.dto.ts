import { IsInt, IsNotEmpty, IsNumber, IsDate } from 'class-validator';

export class CreatePaymentDto {
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsDate()
  paymentDate: Date;

  @IsNotEmpty()
  @IsInt()
  loanId: number;
}
