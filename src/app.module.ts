import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infrastructure/database/database.module';
import dbConfig from './infrastructure/database/db-config';
import { UsersModule } from './app/modules/users/users.module';
import { AuthenticationModule } from './app/modules/authentication/authentication.module';
import { ErrorModule } from './errors/errors.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [dbConfig],
      isGlobal: true,
    }),
    DatabaseModule,
    UsersModule,
    ErrorModule,
    AuthenticationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
