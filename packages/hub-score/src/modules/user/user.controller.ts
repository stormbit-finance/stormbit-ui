import { Controller, Post,Body, Get, Param, Delete, Patch, UseGuards } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from './user.entity';
import { updateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('USER')
@Controller('users')
export class UserController {

constructor(private userService: UserService ){}



@UseGuards(JwtAuthGuard)
@Get()
getUser():Promise<User[]>{
    return this.userService.getUser();
}
@Get('/:id')
getUserById(@Param('id') id:number){
    return this.userService.getUserById(id);
}
@Delete('/:id')
deleteUser(@Param('id') id:number){
    return this.userService.deleteUser(id);
}
@Patch('/:id')
updateUser(@Param('id') id:number,@Body() user:updateUserDto){
    return this.userService.updateUser(id,user);
}

}
