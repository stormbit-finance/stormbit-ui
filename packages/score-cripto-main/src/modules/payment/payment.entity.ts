import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { LoanEntity } from '../loan/loan.entity';

@Entity('payments')
export class PaymentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column({ type: 'timestamp' })
  paymentDate: Date;

 

  @Column()
  loanId: number;
}