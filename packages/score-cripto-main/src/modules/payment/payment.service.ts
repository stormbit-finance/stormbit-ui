import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentEntity } from './payment.entity';
import { Repository } from 'typeorm';
import { CreatePaymentDto } from './dto/createpayment.dto';

@Injectable()
export class PaymentService {constructor(
    @InjectRepository(PaymentEntity)
    private paymentRepository: Repository<PaymentEntity>,
  ) {}

  async createPayment(payment: CreatePaymentDto): Promise<CreatePaymentDto> {
    return this.paymentRepository.save(payment);
  }

  async getAllPayments(): Promise<PaymentEntity[]> {
    return this.paymentRepository.find();
  }

  async getPaymentById(id: number): Promise<PaymentEntity> {
    return this.paymentRepository.findOne({where:{id}});
  }

  async updatePayment(id: number, updatedPayment: PaymentEntity): Promise<PaymentEntity> {
    const payment = await this.paymentRepository.findOne({where:{id}});
    if (!payment) {
      throw new Error(`Payment with id ${id} not found`);
    }
    Object.assign(payment, updatedPayment);
    return this.paymentRepository.save(payment);
  }

  async deletePayment(id: number): Promise<void> {
    const payment = await this.paymentRepository.findOne({where:{id}});
    if (!payment) {
      throw new Error(`Payment with id ${id} not found`);
    }
    await this.paymentRepository.remove(payment);
  }}
