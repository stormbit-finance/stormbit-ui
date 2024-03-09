import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CurrentUserInterceptor } from 'src/common/interceptor/current-user.interceptor';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Score } from './score.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Score]), UserModule, HttpModule],
  providers: [
    AuthService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CurrentUserInterceptor,
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
