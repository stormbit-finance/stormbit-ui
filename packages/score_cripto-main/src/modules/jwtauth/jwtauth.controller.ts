import { Body, Controller, Post } from '@nestjs/common';
import { JwtauthService } from './jwtauth.service';

@Controller('jwtauth')
export class JwtauthController {
    constructor(private authService: JwtauthService) {}

    @Post('login')
    async login(@Body() body: any) {
      const payload = { username: body.username, sub: body.userId };
      const token = await this.authService.generateToken(payload);
      return { access_token: token };
    }
}
