import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm';
@Entity()
export class Score {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    account: string;


    @Column()
    value: string;

    @Column()
    value_rating: string;

    @Column({type:'timestamp',default: () => 'CURRENT_TIMESTAMP'})
    createAt: Date;

    @Column({nullable : true})
    authStatregy: string;

}

