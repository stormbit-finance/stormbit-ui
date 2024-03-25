import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoanEntity } from './loan.entity';


@Injectable()
export class LoanRepository {
  constructor(
    @InjectRepository(LoanEntity)
    private repository: Repository<LoanEntity>,
  ) {}

  async createUser(user: Partial<LoanEntity>): Promise<LoanEntity> {
    const newUser = this.repository.create(user);
    return this.repository.save(newUser);
  }

  
  async getUserById(id: number): Promise<LoanEntity> {
    return this.repository.findOne({ where: { id } });
  }

 
  async getAllUsers(): Promise<LoanEntity[]> {
    return this.repository.find();
  }


  async updateUser(id: number, user: Partial<LoanEntity>): Promise<LoanEntity> {
    const userFound=await this.repository.findOne({where:{id}});
    if (!userFound) {
        console.log('none');
        ;
        throw new Error();
      }

    const updateUser2=Object.assign(userFound,user);
    return this.repository.save(updateUser2);
  }

 
  async deleteUser(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async getApprovedLoans(): Promise<LoanEntity[]> {
    return this.repository.find({ where: { approved: true } });
  }

  async getRefusedLoans(): Promise<LoanEntity[]> {
    return this.repository.find({ where: { refused: true } });
  }



}