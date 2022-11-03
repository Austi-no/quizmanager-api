import {
  BadRequestException,
  HttpException,
  HttpStatus,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { ApiTokenPaymentException } from 'src/exceptions/api-token.exception';

export class ApiTokenCheckMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.headers['api-token'] != '123456789') {
      // throw new BadRequestException('Invalid API token');
      // throw new HttpException('My Response', HttpStatus.PAYMENT_REQUIRED);
      throw new ApiTokenPaymentException();
    }
    next();
  }
}
