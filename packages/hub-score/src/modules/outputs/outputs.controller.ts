import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { OutputService } from '../outputs/outputs.service';
import { CreateOutputDto } from './dto/create-output.dto';
import { UpdateOutputDto } from './dto/update-loan.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('OUTPUT')
@Controller('output')
export class OutputController {
  constructor(private outputService: OutputService) {}

  @Post()
  create(@Body() createOutputDto: CreateOutputDto) {
    return this.outputService.create(createOutputDto);
  }

  @Get()
  findAll() {
    return this.outputService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.outputService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateOutputDto: UpdateOutputDto) {
    return this.outputService.update(id, updateOutputDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.outputService.remove(id);
  }

  @Get(':id/approved')
  getApproved(@Param('id') id: number) {
    return this.outputService.findOne(id).then((output) => output.approved);
  }

  
}