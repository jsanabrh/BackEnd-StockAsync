import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { SignInDto } from '../dto/signin-auth.dto';
import { ErrorService } from 'src/errors/errors.service';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/modules/users/entities/users.entity';
import { Model } from 'mongoose';
import { hashingService } from 'src/providers/hashing/hashing.service';
import { PayloadToken } from 'src/models/token.model';
import { JwtService } from '@nestjs/jwt';
import dbConfig from 'src/database/db-config';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class AuthenticationService {
  constructor(
    @Inject(dbConfig.KEY)
    private readonly configService: ConfigType<typeof dbConfig>,
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly errorService: ErrorService,
    private readonly HashingService: hashingService,
    private readonly jwtService: JwtService,
  ) {}

  generateJwtAccessToken(payload: PayloadToken) {
    try {
      const accessToken = this.jwtService.signAsync(payload, {
        secret: this.configService.session.jwtAccessTokenSecret,
        expiresIn: this.configService.session.jwtAccessTokenExpiresTime,
      });

      return accessToken;
    } catch (error) {
      this.errorService.createError(error);
    }
  }

  generateJwtRefreshToken(payload: PayloadToken) {
    try {
      const refreshToken = this.jwtService.signAsync(payload, {
        secret: this.configService.session.jwtRefreshTokenSecret,
        expiresIn: this.configService.session.jwtRefreshTokenExpiresTime,
      });
      return refreshToken;
    } catch (error) {
      this.errorService.createError(error);
    }
  }

  async findUserAuth(signInDto: SignInDto) {
    try {
      const user = await this.userModel
        .findOne({
          userIdentification: signInDto.userIdentification.trim(),
        })
        .exec();
      if (!user) {
        throw new BadRequestException('Password or identification invalid');
      }

      const isValidPassword = await this.HashingService.compare(
        signInDto.password.trim(),
        user.password,
      );

      if (!isValidPassword) {
        throw new BadRequestException('Password or Identification invalid');
      }

      return user;
    } catch (error) {
      this.errorService.createError(error);
    }
  }
}
