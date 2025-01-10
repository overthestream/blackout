import {
  type ArgumentsHost,
  Catch,
  type ExceptionFilter,
} from '@nestjs/common';
import type { Response } from 'express';
import { HttpException } from 'src/common/utils/exception';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const { statusCode, errorCode, message, name } = exception;

    response.status(statusCode).json({
      statusCode,
      errorCode,
      message,
      name,
    });
  }
}
