import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async createUser(user: Partial<User>): Promise<User> {
    const newUser = this.repository.create(user);
    return this.repository.save(newUser);
  }

  
  async getUserById(id: number): Promise<User> {
    return this.repository.findOne({ where: { id } });
  }

 
  async getAllUsers(): Promise<User[]> {
    return this.repository.find();
  }


  async updateUser(id: number, user: Partial<User>): Promise<User> {
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

  async findByUsername(username: string): Promise<User> {
    return this.repository.findOne({ where: { username } });
  }

  async findByEmail(email: string): Promise<User> {
    return this.repository.findOne({ where: { email } });
  }


  
  async incrementTransactionCount(userId: number): Promise<void> {
    await this.repository.increment({ id: userId }, 'transaction_count', 1);
  }

}