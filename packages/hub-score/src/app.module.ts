import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { HealthModule } from './modules/health/health.module';
import { OutputsModule } from './modules/outputs/outputs.module';
import { LoanModule } from './modules/loan/loan.module';
import { JwtauthModule } from './modules/jwtauth/jwtauth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:'.env',
    }),
    DatabaseModule,UserModule,AuthModule,HealthModule,OutputsModule,LoanModule,JwtauthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
