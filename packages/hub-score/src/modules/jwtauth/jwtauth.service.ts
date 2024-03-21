import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { compare, hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class JwtauthService {
    constructor(private usersService: UserService) {}
    async register(userObject:RegisterAuthDto) {
       const {password}=userObject
       const plaintohash= await hash(password,10)
       userObject= {...userObject,password:plaintohash}
        return this.usersService.createUser(userObject)
    }
    async login(userObjectLogin:LoginAuthDto) {

        const {email,password}=userObjectLogin

        const [findUser]=await this.usersService.find(email)

        if (!findUser) {new HttpException('USER_NOT_FOUND',404)
    }
        const checkPassword= await compare(password,findUser.password)

        if (!checkPassword){ throw new HttpException('PASSWORD_INCORRECT',HttpStatus.FORBIDDEN)
        }
        const data = findUser;

        return data 

    }
}
