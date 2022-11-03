import { HttpException, HttpStatus } from '@nestjs/common';

export class ApiTokenPaymentException extends HttpException {
  constructor() {
    super('Invalid Token', HttpStatus.PAYMENT_REQUIRED);
  }
}
