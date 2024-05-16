import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import dbConfig from 'src/database/db-config';
import { ConfigType } from '@nestjs/config';
import { PayloadToken } from '../models/token.model';

Injectable();
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    @Inject(dbConfig.KEY) configService: ConfigType<typeof dbConfig>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.session.jwtAccessTokenSecret,
    });
  }
  async validate(payload: PayloadToken) {
    return payload;
  }
}
