import {
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'the identification is obligatory' })
  userIdentification: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'the name is obligatory' })
  userName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'the lastname is obligatory' })
  userLastName: string;

  @ApiProperty()
  @IsString({ message: 'The password is not valid' })
  @MinLength(6)
  @MaxLength(20)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
    message: 'Invalid Password',
  })
  password: string;

  @ApiProperty()
  @IsOptional()
  role: string;
}
