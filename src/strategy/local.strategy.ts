import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { SignInDto } from 'src/authentication/dto/signin-auth.dto';
import { AuthenticationService } from 'src/authentication/services/authentication.service';
import { User } from 'src/modules/users/entities/users.entity';

@Injectable()
export class localStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private readonly authenticationService: AuthenticationService) {
    super({ usernameField: 'userIdentification', passwordField: 'password' });
  }

  async validate(userIdentification: string, password: string): Promise<User> {
    const payload: SignInDto = { userIdentification, password };
    const user = await this.authenticationService.findUserAuth(payload);

    return user;
  }
}
