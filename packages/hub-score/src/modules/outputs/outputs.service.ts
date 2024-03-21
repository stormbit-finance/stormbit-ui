import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Output } from './output.entity';
import { CreateOutputDto } from './dto/create-output.dto';
import { UpdateOutputDto } from './dto/update-loan.dto';

@Injectable()
export class OutputService {
  constructor(
    @InjectRepository(Output)
    private outputRepository: Repository<Output>,
  ) {}

  async create(createOutputDto: CreateOutputDto): Promise<Output> {
    const output = this.outputRepository.create(createOutputDto);
    return this.outputRepository.save(output);
  }

  async findAll(): Promise<Output[]> {
    return this.outputRepository.find();
  }

  async findOne(id: number): Promise<Output> {
    return this.outputRepository.findOne({ where: { id } });
  }

  async update(id: number, updateOutputDto: UpdateOutputDto): Promise<Output> {
    await this.outputRepository.update(id, updateOutputDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.outputRepository.delete(id);
  }
}