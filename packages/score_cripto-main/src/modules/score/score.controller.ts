import { Controller, Get, Param, Query } from '@nestjs/common';
import { ScoreService } from './score.service';
import { Observable } from 'rxjs';
import { ApiTags } from '@nestjs/swagger';
import { Score } from './score.entity';
@ApiTags('Score')
@Controller('score')
export class ScoreController {

    constructor(private scoreService: ScoreService) {}

    @Get('obtener-token')
    async getToken(
      @Query('username') username: string,
      @Query('password') password: string,
    ): Promise<string> {
      return this.scoreService.obtenerToken(username, password);
    }
  
    @Get('score')
    async getScore(@Query('address') address: string): Promise<any> {
      const token = '122009c65654ece48921033926486128aa053d44';
      return this.scoreService.getScore(address, token);
    }
    @Get('custom-score/:entityID/:scoreID')
    getCustomScore(
        @Param('entityID') entityID: string,
        @Param('scoreID') scoreID: string,
    ): Promise<any> {
        return this.scoreService.getCenticScore(entityID, scoreID);
    }

    @Get('pre-score/:address')
   async getPreScore(@Param('address') address: string):Promise<any> {
        return this.scoreService.getRocifiScore(address);
    }
    @Get()
getUser():Promise<Score[]>{
    return this.scoreService.getScores();
}

}
