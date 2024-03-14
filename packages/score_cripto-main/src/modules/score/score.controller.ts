import { Body, Controller, Delete, Get, Param, Patch, Query } from '@nestjs/common';
import { ScoreService } from './score.service';
import { Observable } from 'rxjs';
import { ApiTags } from '@nestjs/swagger';
import { Score } from './score.entity';
import { updateScoreDto } from './dto/update-score.dto';


@ApiTags('score')
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
    return this.scoreService.updateUser(id,user);
}
@Get('calculateCustomScore/:entityAddress')
calculateCustomScore(
  @Param('entityAddress') entityAddress: string,
  @Query('scoreId') scoreId: string,
) {
  return this.scoreService.calculateCustomScore(entityAddress, scoreId);
}
}