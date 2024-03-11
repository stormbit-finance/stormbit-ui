import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
    HealthCheck,
    HealthCheckResult,
    HealthCheckService,
    HealthIndicatorResult,
    TypeOrmHealthIndicator,
  } from '@nestjs/terminus';
  
  @ApiTags('HEALTH')
@Controller('health')
export class HealthController {
    constructor(
        private readonly health: HealthCheckService,
        private readonly db: TypeOrmHealthIndicator,
      ) {}
    

      @Get()
      @HealthCheck()
      readiness(): Promise<HealthCheckResult> {
        return this.health.check([
          async (): Promise<HealthIndicatorResult> =>
            this.db.pingCheck('database', {
              timeout: 5000,
            }),
        ]);
      }
}
