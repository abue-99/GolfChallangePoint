import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidCredentialsException extends HttpException {
  constructor() {
    super(
      { statusCode: HttpStatus.UNAUTHORIZED, message: 'Invalid credentials' },
      HttpStatus.UNAUTHORIZED,
    );
  }
}

export class InvalidTokenException extends HttpException {
  constructor() {
    super(
      {
        statusCode: HttpStatus.UNAUTHORIZED,
        message: 'Invalid or expired token',
      },
      HttpStatus.UNAUTHORIZED,
    );
  }
}

export class InsufficientRoleException extends HttpException {
  constructor() {
    super(
      {
        statusCode: HttpStatus.FORBIDDEN,
        message: 'You do not have the required role to access this resource',
      },
      HttpStatus.FORBIDDEN,
    );
  }
}
