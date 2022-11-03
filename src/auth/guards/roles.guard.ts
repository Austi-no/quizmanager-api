import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRoles } from 'src/user/enum/user.enum';
import { UserService } from 'src/user/user.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private userService: UserService) {}
  async canActivate(context: ExecutionContext) {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    console.log('roles', roles);
    const request = context.switchToHttp().getRequest();
    if (request.user) {
      const { id } = request.user;
      console.log(id);

      const user = await this.userService.getUserById(id);
      return roles.includes(user.role);
    }

    return false;
  }
}
