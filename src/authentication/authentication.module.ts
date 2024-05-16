import { Module } from '@nestjs/common';
import { AuthenticationController } from './controllers/authentication.controller';
import { AuthenticationService } from './services/authentication.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/modules/users/entities/users.entity';
import { hashingService } from 'src/providers/hashing/hashing.service';
import { bcryptService } from 'src/providers/hashing/bcrypt.service';
import { ErrorModule } from 'src/errors/errors.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigType } from '@nestjs/config';
import dbConfig from 'src/database/db-config';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import { AuthService } from './services/auth.service';
import { localStrategy } from 'src/strategy/local.strategy';

@Module({
  imports: [
    ErrorModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [dbConfig.KEY],
      useFactory: async (configService: ConfigType<typeof dbConfig>) => {
        return {
          secret: configService.session.jwtAccessTokenSecret,
          signOptions: {
            expiresIn: configService.session.jwtAccessTokenExpiresTime,
          },
        };
      },
    }),
  ],
  controllers: [AuthenticationController],
  providers: [
    { provide: hashingService, useClass: bcryptService },
    AuthService,
    AuthenticationService,
    localStrategy,
    JwtStrategy,
  ],
  exports: [AuthService, AuthenticationService],
})
export class AuthenticationModule {}
