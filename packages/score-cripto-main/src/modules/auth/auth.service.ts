import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { Repository } from 'typeorm';
import { createUserDto } from '../user/dto/create-user.dto';
import axios from 'axios';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { Score } from '../score/score.entity';
import { InjectRepository } from '@nestjs/typeorm';

const scrypt = promisify(_scrypt);
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Score) private scoreRepository: Repository<Score>,
    private httpService: HttpService,
    private usersService: UserService,
  ) {}

  async signup(user: createUserDto) {
    const { email, password } = user;

    const users = await this.usersService.find(email);
    if (users.length) {
      throw new BadRequestException('email in use');
    }
    const salt = randomBytes(8).toString('hex');

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    const result = salt + '.' + hash.toString('hex');

    user.password = result;

    const newuser = await this.usersService.createUser(user);

    return newuser;
  }
  async signin(email: string, password: string) {
    const [user] = await this.usersService.find(email);
    if (!user) {
      throw new NotFoundException('user not found');
    }

    const [salt, storedHash] = user.password.split('.');

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if (storedHash !== hash.toString('hex')) {
      throw new BadRequestException('bad password');
    }

    return user;
  }

}



