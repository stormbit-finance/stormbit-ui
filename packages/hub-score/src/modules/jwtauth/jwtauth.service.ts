import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { compare, hash } from 'bcrypt';
import { UserService } from '../user/user.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtauthService {
    logout() {
        throw new Error('Method not implemented.');
    }
    refreshTokens() {
        throw new Error('Method not implemented.');
    }
    constructor(private usersService: UserService,private JwtAuthService:JwtService) {}
    async register(userObject:RegisterAuthDto) {
       const {password}=userObject
       const plaintohash= await hash(password,10)
       userObject= {...userObject,password:plaintohash}
        return this.usersService.createUser(userObject)
    }
    async login(userObjectLogin:LoginAuthDto) {

        const {email,password}=userObjectLogin

        const findUser=await this.usersService.findbyemail(email)

        if (!findUser) {new HttpException('USER_NOT_FOUND',404)
    }
        const checkPassword= await compare(password,findUser.password)

        if (!checkPassword){ throw new HttpException('PASSWORD_INCORRECT',HttpStatus.FORBIDDEN)
        }

        const payload ={id: findUser.id,name:findUser.username}
        const token = await this.JwtAuthService.sign(payload)

        const data={
user:findUser,
token
        };

        return data; 

    }
}
