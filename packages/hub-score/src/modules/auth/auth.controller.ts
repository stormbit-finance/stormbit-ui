import {Body, Session,Controller, Get, Post, Param, Query, Delete, Patch,NotFoundException,UseInterceptors,ClassSerializerInterceptor, UseGuards} from '@nestjs/common';
import { createUserDto } from '../user/dto/create-user.dto';
import { UserService } from '../user/user.service';
import { updateUserDto } from '../user/dto/update-user.dto';
// import { UserDto } from './dtos/user.dto';
import { AuthService } from './auth.service';
import { User } from '../user/user.entity';

import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { CurrentUserInterceptor } from 'src/common/interceptor/current-user.interceptor';
// import { SerializeInterceptor,Serialize } from '../interceptors/serialize.interceptor';
import { AuthGuard } from '../../common/guards/auth.guard';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('AUTH')
@Controller('auth')


export class AuthController {
    constructor(
       private authService:AuthService ){}



   
@Get('/whoami')
@UseGuards(AuthGuard)
whoami(@CurrentUser() user: User){
    return user;
}

    @Post('/signout')
    signout(@Session() session: any){
        session.userId = null;
        console.log(session.userId);
        
    }
@Post('/signup')
async createUser(@Body() body: createUserDto,@Session() session: any){
 const user:any= await this.authService.signup(body);
 console.log(user.id);
 
session.userId = user.id;
return user;
}



@Post('/signin')
async signin(@Body() body: createUserDto,@Session() session: any){
    const user = await this.authService.signin(body.email,body.password);
    session.userId = user.id;
    return user;

}


}