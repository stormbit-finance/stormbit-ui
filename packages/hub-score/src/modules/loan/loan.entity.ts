import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class Tranche {
  amount: number;
  date: Date;
}


@Entity({ name: 'IDPool' })
export class LoanEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  approved: boolean;

  @Column({ default: false })
  refused: boolean;

  @Column({
    type: 'jsonb',
    default: { repaid: false, tranches: [], repaymentTime: 0 },
  })
  repaid: {
    repaid: boolean;
    tranches: Tranche[];
    repaymentTime: number;
  };
}