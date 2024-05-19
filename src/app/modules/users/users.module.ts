import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './services/users.service';
import { User, UserSchema } from './entities/users.entity';
import { hashingService } from '../../../infrastructure/adapters/hashing/hashing.service';
import { bcryptService } from '../../../infrastructure/adapters/hashing/bcrypt.service';
import { ErrorModule } from '../../../errors/errors.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ErrorModule,
  ],
  controllers: [UsersController],
  providers: [
    { provide: hashingService, useClass: bcryptService },
    UsersService,
  ],
  exports: [UsersService],
})
export class UsersModule {}
