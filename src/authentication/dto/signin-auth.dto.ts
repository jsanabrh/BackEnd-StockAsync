import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SignInDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'User or Password invalid' })
  readonly userIdentification: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'User or Password invalid' })
  readonly password: string;
}
