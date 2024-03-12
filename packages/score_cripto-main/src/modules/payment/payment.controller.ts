import { Controller, Get, Param, Put,Delete, Body } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentEntity } from './payment.entity';

@Controller('payment')
export class PaymentController {

    constructor(private readonly paymentService: PaymentService) {}

    @Get()
    async getAllPayments(): Promise<PaymentEntity[]> {
      return this.paymentService.getAllPayments();
    }
  
    @Get(':id')
    async getPaymentById(@Param('id') id: number): Promise<PaymentEntity> {
      return this.paymentService.getPaymentById(id);
    }
  
    @Put(':id')
    async updatePayment(@Param('id') id: number, @Body() updatedPayment: PaymentEntity): Promise<PaymentEntity> {
      return this.paymentService.updatePayment(id, updatedPayment);
    }
  
    @Delete(':id')
    async deletePayment(@Param('id') id: number): Promise<void> {
      return this.paymentService.deletePayment(id);
    }

}
