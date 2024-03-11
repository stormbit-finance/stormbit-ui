import { Injectable ,HttpException,HttpStatus} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository} from 'typeorm';
import {createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
constructor(@InjectRepository(User) private userRepository: Repository<User>) {}


async createUser(user:createUserDto) {
    const userFound = this.userRepository.findOne({where:{email:user.email}});
    if(!userFound) {
        return new HttpException('User already exists',HttpStatus.BAD_REQUEST);
    }
 const newUser  = this.userRepository.create(user);
 return this.userRepository.save(newUser);
}
getUser() {
    return this.userRepository.find();
}
async getUserById(id:number) {
  
    if(!id) {
        return new HttpException('User not found',HttpStatus.NOT_FOUND);
    }
    return this.userRepository.findOne({where:{id}});;
}

async deleteUser(id:number) {

    const userFound= await this.userRepository.findOne({where:{id}});
    
    if(!userFound) {
        return new HttpException('User not found',HttpStatus.NOT_FOUND);
    }
    
    
   return this.userRepository.delete({id});


}
async updateUser(id:number,user:updateUserDto) {
    const userFound=await this.userRepository.findOne({where:{id}});
    if (!userFound) {
        return new HttpException('User not found',HttpStatus.NOT_FOUND);
    }

    const updateUser2=Object.assign(userFound,user);
    return this.userRepository.save(updateUser2);

}
find(email:string){
    return this.userRepository.find({where:{email}});
}
}
