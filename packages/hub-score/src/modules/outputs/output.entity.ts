import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Output {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  approved: boolean;

  @Column({ default: false })
  refused: boolean;
}