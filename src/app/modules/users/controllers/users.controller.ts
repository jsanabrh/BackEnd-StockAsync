import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../../guards/jwt-auth.guard';

//Controllers are created for the user module

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('getAll')
  async findAll() {
    return await this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('getOne/:userIdentification')
  async findOne(@Param('userIdentification') userIdentification: string) {
    return await this.usersService.findOne(userIdentification);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Delete('deleteUser/:userIdentification')
  remove(@Param('userIdentification') userIdentification: string) {
    return this.usersService.remove(userIdentification);
  }
}
