import {
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

//Dto are created for the user module

export class CreateUserDto {
  @ApiProperty({
    example: '10000987434',
    description: 'The ID of the user',
  })
  @IsString()
  @IsNotEmpty({ message: 'The identification is obligatory' })
  userIdentification: string;

  @ApiProperty({
    example: 'Juan Pablo',
    description: 'The name of the user',
  })
  @IsString()
  @IsNotEmpty({ message: 'The user name is obligatory' })
  userName: string;

  @ApiProperty({
    example: 'Sanabria Hoyos',
    description: 'The last name of the user',
  })
  @IsString()
  @IsNotEmpty({ message: 'The user lastname is obligatory' })
  userLastName: string;

  @ApiProperty({
    example: 'Juan12345',
    description: 'The password of the user',
  })
  @IsString({ message: 'The password is not valid' })
  @MinLength(6)
  @MaxLength(20)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
    message:
      'The password must have more than 6 characters, include an uppercase letter, and contain a numeric character.',
  })
  password: string;

  @ApiProperty({
    example: 'seller',
    description: 'The user role, which is set to seller by default',
  })
  @IsOptional()
  role: string;
}
