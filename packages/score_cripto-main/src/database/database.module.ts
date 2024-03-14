import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../modules/user/user.entity';
import {ConfigModule,ConfigService} from '@nestjs/config';
import { Score } from 'src/modules/score/score.entity';
import { LoanEntity } from 'src/modules/loan/loan.entity';
import { PaymentEntity } from 'src/modules/payment/payment.entity';
@Module({ imports: [
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
      inject: [ConfigService],
        useFactory: (configService: ConfigService) => {
            return {
            type: 'postgres',
            host: configService.get('DB_HOST'),
            port: configService.get('DB_PORT'),
          
            username: configService.get('DB_USERNAME'),
            password: configService.get('DB_PASSWORD'),
            database: configService.get('DB_NAME'),
            entities: [User,Score,LoanEntity,PaymentEntity],
            synchronize: true,
            }
        },
 
  })]})
export class DatabaseModule {
   
}
