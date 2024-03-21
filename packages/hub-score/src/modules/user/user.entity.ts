import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm';
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column({nullable:true})
    transaction_count : number

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({type:'timestamp',default: () => 'CURRENT_TIMESTAMP'})
    createAt: Date;

    @Column({nullable : true})
    authStatregy: string;

}


