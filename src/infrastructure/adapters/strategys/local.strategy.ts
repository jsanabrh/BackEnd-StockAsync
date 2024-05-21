import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { SignInDto } from '../../../app/modules/authentication/dtos/signin-auth.dto';
import { AuthenticationService } from '../../../app/modules/authentication/services/authentication.service';
import { User } from '../../../app/modules/users/entities/users.entity';

//The strategy is defined to search for the user using the userIdentification and password provided in the request, using AuthenticationService to perform the user search and authentication

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
