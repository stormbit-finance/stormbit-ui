import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PaymentEntity } from '../payment/payment.entity';

@Entity('loans')
export class LoanEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  borrower: string;

  @Column()
  lender: string;

  @Column()
  amount: number;

  @Column()
  interest: number;

  @Column({ type: 'timestamp' })
  startDate: Date;

  @Column({ type: 'timestamp' })
  endDate: Date;

  @Column()
  collateral: string;

  @Column({ default: false })
  repaid: boolean;

  @OneToMany(() => PaymentEntity, payment => payment.loan)
  payments: PaymentEntity[];
}