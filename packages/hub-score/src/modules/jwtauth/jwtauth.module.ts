import { Module } from '@nestjs/common';
import { JwtauthService } from './jwtauth.service';
import { JwtauthController } from './jwtauth.controller';

@Module({
  providers: [JwtauthService],
  controllers: [JwtauthController]
})
export class JwtauthModule {}
