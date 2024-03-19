import { Body, Controller, Delete, Get, Param, Patch, Query, Session } from '@nestjs/common';
import { ScoreService } from './score.service';
import { Observable } from 'rxjs';
import { ApiTags } from '@nestjs/swagger';
import { Score } from './score.entity';
import { updateScoreDto } from './dto/update-score.dto';
import { averageScoreDto } from './dto/average.dto';
import { session } from 'passport';
import { ConfigService } from '@nestjs/config';


@ApiTags('score')
@Controller('score')
export class ScoreController {

    constructor(private scoreService: ScoreService,private configService:ConfigService) {}

    // @Get('average')
    // async getaverage(@Body() body:averageScoreDto,@Session() session: any){

    //   this.scoreService.getScore(address, token);

    //   this.scoreService.getCenticScore(entityID, scoreID);

    //   this.scoreService.getRocifiScore(address);
    // }


    @Get('get-token-cred-protocol')
    async getToken(
      @Query('username') username: string,
      @Query('password') password: string,
    ): Promise<string> {
      return this.scoreService.getToken(username, password);
    }
  
    @Get('score')
    async getScore(@Query('address') address: string): Promise<any> {
      const token = this.configService.get('TOKEN_CRED_PROTOCOL');
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
@Get('/:id')
getUserById(@Param('id') id:number){
    return this.scoreService.getScoreById(id);
}
@Delete('/:id')
deleteUser(@Param('id') id:number){
    return this.scoreService.deleteScore(id);

}
@Patch('/:id')
updateUser(@Param('id') id:number,@Body() user:updateScoreDto){
    return this.scoreService.updateScore(id,user);
}
@Get('calculateCustomScore/:entityAddress')
calculateCustomScore(
  @Param('entityAddress') entityAddress: string,
  @Query('scoreId') scoreId: string,
) {
  return this.scoreService.calculateCustomScoreCentic(entityAddress, scoreId);
}
}
