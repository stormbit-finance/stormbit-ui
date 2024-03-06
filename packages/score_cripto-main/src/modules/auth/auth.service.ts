import { BadRequestException, Injectable, NotFoundException, } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { randomBytes,scrypt as _scrypt } from "crypto";
import { promisify } from "util";
import { Not } from "typeorm";
import { createUserDto } from "../user/dto/create-user.dto";
import axios from 'axios';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, lastValueFrom } from 'rxjs';

const scrypt = promisify(_scrypt);
@Injectable()
export class AuthService {

    constructor(private httpService:HttpService,private usersService: UserService) { }

    async signup(user:createUserDto) {

        const {email,password}=user

        const users = await this.usersService.find(email);
        if (users.length) {
            throw new BadRequestException('email in use');
        }
 const salt = randomBytes(8).toString('hex');

 const hash = (await scrypt(password,salt,32)) as Buffer;

 const result = salt + '.' + hash.toString('hex');

 user.password=result

 const newuser = await this.usersService.createUser(user);

 return newuser
    }
   async signin(email: string, password: string) {
  const [user]= await this.usersService.find(email);
  if (!user) {
      throw new NotFoundException('user not found');
    }


    const [salt, storedHash] = user.password.split('.');

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if (storedHash !== hash.toString('hex')){
        throw new BadRequestException('bad password');
    }

        return user;
    
}


async obtenerToken(username: string, password: string): Promise<string> {
    const url = 'https://risk.credprotocol.com/api/token/auth/create/'; // Asegúrate de reemplazar con la URL correcta
    const parametros = new URLSearchParams();
    parametros.append('username', username);
    parametros.append('password', password);

    try {
      const response = await axios.post(url, parametros.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      // Asumiendo que la API responde con { token: '...' }
      return response.data.token;
    } catch (error) {
      // Manejar error adecuadamente
      console.error('Error al obtener el token:', error);
      throw new Error('No se pudo obtener el token');
    }
  }

  async getScore(address: string, token: string): Promise<any> {
    const url = `https://beta.credprotocol.com/api/score/address/${address}`;
    const headersRequest = {
      'Authorization': `Token ${token}`,
    };
    
    try {
      const response = await firstValueFrom(
        this.httpService.get(url, { headers: headersRequest })
      );
      return response.data;
    } catch (error) {
      // Manejo de errores adecuado
      throw error;
    }
  }
  
}



