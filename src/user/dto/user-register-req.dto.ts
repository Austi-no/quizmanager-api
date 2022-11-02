import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';
import { REGEX } from 'src/app.utils';

export class UserRegistrationRequestDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @Length(8, 20)
  @Matches(REGEX.PASSWORD_RULE, { message: REGEX.PASSWORD_RULE_MESSAGE })
  password: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @Length(8, 20)
  @Matches(REGEX.PASSWORD_RULE, { message: REGEX.PASSWORD_RULE_MESSAGE })
  confirmPassword: string;
}
