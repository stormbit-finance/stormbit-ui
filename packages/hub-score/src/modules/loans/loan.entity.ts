import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Loan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  approved: boolean;

  @Column({ default: false })
  refused: boolean;

  @Column({ default: false })
  repaid: boolean;

  @Column({ default: 0 })
  timeDelay: number;
}