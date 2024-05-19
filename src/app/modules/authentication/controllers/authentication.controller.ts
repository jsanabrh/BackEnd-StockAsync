import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from '../services/auth.service';
import { Request } from 'express';
import { User } from '../../users/entities/users.entity';
import { LocalAuthGuard } from '../../../../guards/local-auth.guard';

@ApiTags('Authentication')
@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: Request) {
    const user = req.user as User;

    return await this.authService.signIn(user);
  }
}
