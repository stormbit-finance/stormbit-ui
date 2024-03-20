import { Module } from '@nestjs/common';
import { OutputsController } from './outputs.controller';
import { OutputsService } from './outputs.service';

@Module({
  controllers: [OutputsController],
  providers: [OutputsService]
})
export class OutputsModule {}
