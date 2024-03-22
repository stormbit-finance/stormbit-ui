import { Module } from '@nestjs/common';
import { JwtauthService } from './jwtauth.service';
import { JwtauthController } from './jwtauth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[UserModule,JwtModule.register({
secret: 'secret',
signOptions:{expiresIn:'60s'},

  })],
  providers: [JwtauthService],
  controllers: [JwtauthController],
  
})
export class JwtauthModule {}
