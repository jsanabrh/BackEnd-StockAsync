import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthService } from '../services/auth.service';
import { Request } from 'express';
import { User } from '../../users/entities/users.entity';
import { LocalAuthGuard } from '../../../../guards/local-auth.guard';
import { SignInDto } from '../dtos/signin-auth.dto';

//Controllers are created for the authentication module

@ApiTags('Authentication')
@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authService: AuthService) {}

  @ApiBody({ type: SignInDto })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: Request) {
    const user = req.user as User;

    return await this.authService.signIn(user);
  }
}
