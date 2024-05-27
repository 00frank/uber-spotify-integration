import { Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  login(@Req() request: Request) {
    console.log('request: ', request.headers.authorization);
    return this.authService.login(request.headers.authorization);
  }
}
