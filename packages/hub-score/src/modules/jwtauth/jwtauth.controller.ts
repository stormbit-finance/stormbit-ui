import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtauthService } from './jwtauth.service';

@Controller('jwtauth')
export class JwtauthController {
constructor(private jwtauthService:JwtauthService){}

@Post('register')
registerUser(@Body() userObject:RegisterAuthDto){
    console.log({body:userObject});
    return this.jwtauthService.register(userObject)
    
}
@Post('login')
loginUser(@Body() userObjectLogin:LoginAuthDto){
    console.log("se ejecuta login");
    
    console.log({body:userObjectLogin});
    return this.jwtauthService.login(userObjectLogin)
    
}

}
