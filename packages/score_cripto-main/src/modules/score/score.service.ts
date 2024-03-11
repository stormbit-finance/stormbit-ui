import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from '../user/user.service';
import { HttpService } from '@nestjs/axios';
import { Repository } from 'typeorm';
import { Score } from './score.entity';
import axios from 'axios';
import { Observable, firstValueFrom, lastValueFrom, map } from 'rxjs';
import { response } from 'express';

@Injectable()
export class ScoreService {
    private readonly apiUrlRocifi = 'https://v2.rociapi.com/pre_score';
    private readonly tokenRocifi = 'TU_TOKEN';
    private readonly apiUrl = 'https://api-integrate.centic.io/centic-services/calculateCustomScore';
    private readonly apiKey = 'TU_API_KEY';

    constructor(
        @InjectRepository(Score) private scoreRepository: Repository<Score>,
        private httpService: HttpService,
        private usersService: UserService,
      ) {}
    
    
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
      Authorization: `Token ${token}`,
    };

    try {
      const response = await firstValueFrom(
        this.httpService.get(url, { headers: headersRequest }),
      );
      const data = response.data;
      const score = {
        account: data.account,
        value: data.value,
        value_rating: data.value_rating,
      };

    
      const newregister = await this.scoreRepository.create(score);
      await this.scoreRepository.save(newregister);

      return response.data;
    } catch (error) {
      
      throw error;
    }
  }
 async getCenticScore(entityID: string, scoreID: string): Promise<Observable<any>> {
    const url = `${this.apiUrl}/${entityID}?scoreId=${scoreID}`;
    const headers = {
      'x-apikey': this.apiKey,
      'Content-Type': 'application/json',
    };

    return this.httpService.get(url, { headers });
  }

  async getRocifiScore(address: string): Promise<any> {
    const url = `${this.apiUrlRocifi}/${address}`;
    const headers = {
      Accept: 'application/json',
      Authorization: `Bearer ${this.tokenRocifi}`,
    };

    const observable = this.httpService.get(url, { headers }).pipe(
      map((response) => response.data),
    );

    lastValueFrom(observable);
    const data = await lastValueFrom(observable);
    const score = {
        account: data.address,
        value: data.credit_score,
        value_rating: data.feature_generator_version,
    };
    const newregister = await this.scoreRepository.create(score);
    await this.scoreRepository.save(newregister);

    return score
  } catch (error) {
    
    throw error;
  }
  }

