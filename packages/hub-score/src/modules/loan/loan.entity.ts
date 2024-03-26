import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TrancheEntity } from './tranche.entity';

@Entity({ name: 'IDPool' })
export class LoanEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  approved: boolean;

  @Column({ default: false })
  refused: boolean;

  @Column({ type: 'jsonb', default: { repaid: false, repaymentTime: 0 } })
  repaid: { repaid:boolean, repaymentTime: number };

  @OneToMany(() => TrancheEntity, tranche => tranche.loan)
  tranches: TrancheEntity[];
}
