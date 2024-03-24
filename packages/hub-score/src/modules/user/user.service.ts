import { Injectable ,HttpException,HttpStatus} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository} from 'typeorm';
import {createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';
import { RegisterAuthDto } from '../jwtauth/dto/register-auth.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
constructor(private userRepository:UserRepository) {}


async createUser(user:RegisterAuthDto) {
    const userFound = this.userRepository.findByEmail(user.email);
    if(!userFound) {
        return new HttpException('User already exists',HttpStatus.BAD_REQUEST);
    }
 const newUser  = this.userRepository.createUser(user);
 return newUser;
}
getUser() {
    return this.userRepository.getAllUsers();
}
async getUserById(id:number) {
  
    if(!id) {
        return new HttpException('User not found',HttpStatus.NOT_FOUND);
    }
    return this.userRepository.getUserById(id);
}

async deleteUser(id:number) {

    const userFound= await this.userRepository.getUserById(id);
    
    if(!userFound) {
        return new HttpException('User not found',HttpStatus.NOT_FOUND);
    }
    
    
   return this.userRepository.deleteUser(id);


}
async updateUser(id:number,user:updateUserDto) {

   
    return this.userRepository.updateUser(id,user);

}

findbyemail(email:string){
    return this.userRepository.findByEmail(email);
}

}
