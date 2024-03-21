import { Module } from '@nestjs/common';
import { JwtauthService } from './jwtauth.service';
import { JwtauthController } from './jwtauth.controller';
import { UserModule } from '../user/user.module';

@Module({
  imports:[UserModule],
  providers: [JwtauthService],
  controllers: [JwtauthController],
  
})
export class JwtauthModule {}
