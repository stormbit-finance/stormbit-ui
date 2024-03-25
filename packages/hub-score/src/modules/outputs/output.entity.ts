import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name :'output'})
export class Output {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  approved: boolean;

}