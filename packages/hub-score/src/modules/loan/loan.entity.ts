import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'IDPool' })
export class LoanEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  approved: boolean;

  @Column({ default: false })
  refused: boolean;

  
  @Column({ type: 'jsonb', default: { repaid: false, timeDelay: 0 } })
  repaid: { repaid: boolean, timeDelay: number };
}