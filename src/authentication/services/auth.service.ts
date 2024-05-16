import { Injectable } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { SignInPayload } from 'src/models/signIn.model';
import { ErrorService } from 'src/errors/errors.service';
import { PayloadToken } from '../../models/token.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly errorService: ErrorService,
  ) {}

  async signIn(payload: SignInPayload) {
    try {
      const data: PayloadToken = {
        userIdentification: payload.userIdentification,
        role: payload.role,
      };

      const [accessToken, refreshToken] = await Promise.all([
        this.authenticationService.generateJwtAccessToken(data),
        this.authenticationService.generateJwtRefreshToken(data),
      ]);

      return {
        message: 'Authoriced',
        accessToken,
        refreshToken,
        user: payload,
      };
    } catch (error) {
      this.errorService.createError(error);
    }
  }
}
