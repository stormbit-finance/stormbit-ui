import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../modules/user/user.entity';
import {ConfigModule,ConfigService} from '@nestjs/config';
import { Loan } from 'src/modules/loans/loan.entity';
import { Output } from 'src/modules/outputs/output.entity';
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
            entities: [User,Loan,Output],
            synchronize: true,
            }
        },
 
  })]})
export class DatabaseModule {
   
}
