import { Module } from '@nestjs/common';
import { JwtauthService } from './jwtauth.service';
import { JwtauthController } from './jwtauth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports:[UserModule,JwtModule.register({
secret: 'secret',
signOptions:{expiresIn:'20h'},

  })],
  providers: [JwtauthService,JwtStrategy],
  controllers: [JwtauthController],
  
})
export class JwtauthModule {}
