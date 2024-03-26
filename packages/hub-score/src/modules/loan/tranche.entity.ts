import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { LoanEntity } from './loan.entity';

@Entity()
export class TrancheEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  date: Date;

  @ManyToOne(() => LoanEntity, loan => loan.tranches)
  loan: LoanEntity;
}
