import { Module } from '@nestjs/common';
import { ScoreController } from './score.controller';
import { ScoreService } from './score.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Score } from './score.entity';
import { UserModule } from '../user/user.module';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:[TypeOrmModule.forFeature([Score]),UserModule,HttpModule,ConfigModule.forRoot({
    envFilePath: '.env',
  })],
  controllers: [ScoreController],
  providers: [ScoreService]

})
export class ScoreModule {}
