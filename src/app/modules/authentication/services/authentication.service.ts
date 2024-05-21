import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { SignInDto } from '../dtos/signin-auth.dto';
import { ErrorService } from 'src/errors/errors.service';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/app/modules/users/entities/users.entity';
import { Model } from 'mongoose';
import { hashingService } from 'src/infrastructure/adapters/hashing/hashing.service';
import { PayloadToken } from 'src/infrastructure/adapters/models/token.model';
import { JwtService } from '@nestjs/jwt';
import dbConfig from 'src/infrastructure/database/db-config';
import { ConfigType } from '@nestjs/config';

//Common services are created for the authentication module

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

  async findUserAuth(signInDto: SignInDto) {
    try {
      const user = await this.userModel
        .findOne({
          userIdentification: signInDto.userIdentification.trim(),
        })
        .exec();
      if (!user) {
        throw new BadRequestException(
          'User identification or password invalid',
        );
      }

      const isValidPassword = await this.HashingService.compare(
        signInDto.password.trim(),
        user.password,
      );

      if (!isValidPassword) {
        throw new BadRequestException(
          'User identification or password invalid',
        );
      }

      return user;
    } catch (error) {
      this.errorService.createError(error);
    }
  }
}
