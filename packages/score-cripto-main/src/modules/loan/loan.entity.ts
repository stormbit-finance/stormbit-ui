import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PaymentEntity } from '../payment/payment.entity';

@Entity('loans')
export class LoanEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  debt_total: number;

  @Column()
  lender: number;

  @Column()
  deposit_total: number;

  @Column()
  repaid_total: number;
  
  @Column()
  loans_request_rejected: number;

  @Column()
  loans_expired: number;


}