import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SETTINGS } from 'src/app.utils';
import { UserRegistrationRequestDto } from './dto/user-register-req.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

ApiTags('User Controller');
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  @HttpCode(200)
  @UsePipes(SETTINGS.VALIDATION_PIPE)
  async registeruser(
    @Body() userDto: UserRegistrationRequestDto,
  ): Promise<User> {
    return await this.userService.registerUser(userDto);
  }
}
