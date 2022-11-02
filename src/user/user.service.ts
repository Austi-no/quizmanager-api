import { Injectable } from '@nestjs/common';
import { UserRegistrationRequestDto } from './dto/user-register-req.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcryptjs';
@Injectable()
export class UserService {
  async registerUser(userDto: UserRegistrationRequestDto): Promise<User> {
    const user = new User();
    user.email = userDto.email;
    user.password = userDto.password;
    user.name = userDto.name;
    return await user.save();
  }
}
