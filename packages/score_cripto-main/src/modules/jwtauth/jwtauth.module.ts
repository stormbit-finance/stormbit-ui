import { Module } from '@nestjs/common';
import { JwtauthService } from './jwtauth.service';
import { JwtauthController } from './jwtauth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'tu_secreto_jwt',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [JwtauthService],
  controllers: [JwtauthController]
})
export class JwtauthModule {}
